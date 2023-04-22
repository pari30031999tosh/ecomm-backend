const express = require('express');
const bodyParser = require('body-parser')
const multer  = require('multer')
require("dotenv").config();

const userRoutes = require('./routers/users')

const app = express();

//thord party mmiddlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routes
app.use("/users", userRoutes);




module.exports = app;



