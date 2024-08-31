const rootDir = require('../util/path');

const path = require('path');

exports.getShop = (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
}