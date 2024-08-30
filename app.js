const express = require('express');

const path = require('path');

const bodyParser= require('body-parser');

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const contactUsRoutes = require('./routes/contact');

const app= express(); 

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use('/admin',shopRoutes);
app.use('/admin',contactUsRoutes);


app.use((req,res) => {
    res.sendFile(path.join(__dirname,'views','Error.html'));
})

app.listen(3000);        