const fs = require('fs');

const path = require('path');

const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (callback) => {

    fs.readFile(p,(err, fileContent) => {
        if(err){
            callback([]);
        }else {
            callback(JSON.parse(fileContent));
        }
        
    })
}

module.exports = class Product {

    constructor(t,s){
        this.product =t;
        this.size = s;
    }

    save(){
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }

    static fetchAll(callback) {
        getProductsFromFile(callback);
    }
};