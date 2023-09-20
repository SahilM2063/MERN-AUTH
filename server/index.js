const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose')

// database connection

mongoose.connect(process.env.MONGODB_URL,
    ({ dbName: "MERN_AUTH" }))
    .then(() => console.log("Database connected successfully."))
    .catch((err) => console.log("Failed to connect with database...", err))


const app = express();

app.use('/', require('./routes/userAuthRoutes.js'))

const port = 4000;
app.listen(port, () => { console.log(`Server started listning port : ${port}`) })