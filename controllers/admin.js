const rootDir = require('../util/path');

const path = require('path');

const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postAddProduct = (req,res,next) => {
    const product = new Product(req.body.product,req.body.size);
    product.save();
    console.log(Product.fetchAll());
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.redirect('/');
}