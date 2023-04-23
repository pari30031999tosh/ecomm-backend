const express = require('express');
const router = express.Router();

//controllers
const userController = require("../controllers/users");


router.post("/userSignup",userController.userSignup);
router.post("/loginUser", userController.loginUser);
router.post("/logoutUser", userController.logoutUser)

module.exports = router;