const products = [];

module.exports = class Product {
    constructor(t,s){
        this.product =t;
        this.size = s;
    }

    save(){
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
} 