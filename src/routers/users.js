const express = require('express');
const router = express.Router();

//controllers
const userController = require("../controllers/users");



router.post("/createUser",userController.createUser);

module.exports = router;