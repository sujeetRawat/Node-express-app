const http = require('http');
const express = require('express');

const app= express();

app.use((req,res,next)=>{                 //app.use allows us to add middleware function
    console.log("In the middleware");
   next();                                //allows the request to continue to the next middleware
}) 

app.use((req,res,next)=>{                 
    console.log("In the Second middleware");
    res.send("<h1>Hello</h1>");
    
}) 

app.listen(3000);        