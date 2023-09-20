const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express();

// database connection

mongoose.connect(process.env.MONGODB_URL,
    ({ dbName: "MERN_AUTH" }))
    .then(() => console.log("Database connected successfully."))
    .catch((err) => console.log("Failed to connect with database...", err))

// MiddleWare

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))


app.use('/', require('./routes/userAuthRoutes.js'))

const port = 4000;
app.listen(port, () => { console.log(`Server started listning port : ${port}`) })