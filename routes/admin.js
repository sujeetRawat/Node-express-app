const express = require('express');

const path = require('path');

const router =express.Router();

const getProductController = require('../controllers/admin');

const postProductController = require('../controllers/admin');

router.get('/add-product', getProductController.getAddProduct);

router.post('/add-product',postProductController.postAddProduct);

module.exports= router;