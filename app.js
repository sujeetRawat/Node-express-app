const express = require('express');
const bodyParser= require('body-parser');
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

const app= express(); 

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRoutes);
app.use('/admin',shopRoutes);


app.use((req,res) => {
    res.status(404).send('<h1>Page not Found !! </h1>');
})

app.listen(3000);        