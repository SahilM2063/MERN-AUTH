const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors')


const app = express();


const port = 4000;
app.listen(port, () => { console.log(`Server started listning port : ${port}`) })