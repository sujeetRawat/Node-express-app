const fs = require('fs');

const path = require('path');

const rootDir = require('../util/path');

module.exports = class Product {
    constructor(t,s){
        this.product =t;
        this.size = s;
    }

    save(){
        const p = path.join(rootDir, 'data', 'products.json');

        fs.readFile(p, (err, fileContent) => {
            let products =[];
            if(!err){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            //console.log(products);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {

        const p = path.join(rootDir, 'data', 'products.json');

        fs.readFile(p,(err, fileContent) => {
            if(err){
                callback([]);
            }
            callback(JSON.parse(fileContent));
        })
    }
};