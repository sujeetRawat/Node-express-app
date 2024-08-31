const rootDir = require('../util/path');

const path = require('path');

const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
     Product.fetchAll((products) => {
        console.log(products);
     });
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postAddProduct = (req,res,next) => {
    const product = new Product(req.body.product,req.body.size);
    product.save();
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.redirect('/');
}