const express = require('express');

const path = require('path');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/',shopController.getShop);

module.exports = router;