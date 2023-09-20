const User = require('../models/user.js')
const { hashPassword, comparePassword } = require('../Helpers/auth.js')

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


module.exports = {
    test, registerUser
}