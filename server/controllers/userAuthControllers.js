const User = require('../models/user.js')
const { hashPassword, comparePassword } = require('../Helpers/auth.js')
const jwt = require('jsonwebtoken')

const test = (req, res) => {
    res.send("Test is working")
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check for name is valid or not 
        if (!name) {
            return res.json({
                err: "name is required"
            })
        }

        // check for password is valid or not 
        if (!password || password.length < 8) {
            return res.json({
                err: "password is required and should be at least 8 characters long"
            })
        }

        // check for email id is valid or not
        let emailExists = await User.findOne({ email })
        if (emailExists) {
            return res.json({
                err: "Email already taken"
            })
        }

        // Hashing the password
        const hashedPassword = await hashPassword(password);

        // Creating user
        const createdUser = await User.create({
            name, email, password: hashedPassword
        })

        return res.json(createdUser)
    } catch (error) {
        console.log(error);
    }
}


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // check if user is existed
    const fetchedUser = await User.findOne({ email });
    if (!fetchedUser) {
        return res.json({
            err: "No user found"
        })
    }

    // check for if password is match
    const match = await comparePassword(password, fetchedUser.password);
    if (match) {
        jwt.sign({ id: fetchedUser._id, email: fetchedUser.email, name: fetchedUser.name }, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json(fetchedUser)
        })
    }
    if (!match) {
        return res.json({
            err: "Email or password is invalid"
        })
    }
}


const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}


module.exports = {
    test, registerUser, loginUser, getProfile
}