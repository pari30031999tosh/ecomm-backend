const express = require('express');
const bodyParser = require('body-parser')
const multer  = require('multer')
require("dotenv").config();

const userRoutes = require('./routers/users')
const productRoutes = require('./routers/products')

const app = express();

//thord party mmiddlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routes
app.use("/", userRoutes);
app.use('/products', productRoutes);




module.exports = app;



