const express = require('express');


const router =express.Router();


router.get('/add-product', (req,res) => {
    res.send('<form action="/admin/product" method="POST">Name : <input type="text" name="product"></input>Size : <input type="number" name="size"></input><button>Add product</button></form>')
})

router.post('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/admin');
})

module.exports= router;