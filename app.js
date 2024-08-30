const express = require('express');

const path = require('path');

const bodyParser= require('body-parser');

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const contactUsRoutes = require('./routes/contact');

const errorControlller = require('./controllers/error404');

const app= express(); 

app.use(bodyParser.urlencoded({extended : false})); 

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactUsRoutes);


app.use(errorControlller.getError);

app.listen(3000);        