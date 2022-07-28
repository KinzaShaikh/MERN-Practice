const express = require('express')
const productController = require('../controllers/ProductController');

const productRoute = express();

productRoute.post('/addProduct',productController.addProduct)
productRoute.get('/displayProducts',productController.displayProduct)
productRoute.post('/deleteProduct',productController.deleteProduct)
module.exports = productRoute