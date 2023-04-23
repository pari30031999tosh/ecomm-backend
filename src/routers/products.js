const express = require('express');
const router = express.Router();

//controllers
const productController = require("../controllers/products");


router.post("/createProduct",productController.createProduct);
router.post("/addproducttocart", productController.addProducttoCart);

module.exports = router;