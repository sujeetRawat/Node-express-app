const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/contact-us',(req,res) =>{
    res.sendFile(path.join(__dirname, '../','views','contact.html'));
});

router.post('/contact-us/success',(req,res) => {
    res.send('<h1 style="color: green" >Form successfuly filled</h1>');
})

module.exports = router;