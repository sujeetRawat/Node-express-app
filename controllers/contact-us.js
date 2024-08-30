const path = require('path');

exports.contactUs= (req,res,next) => {
        res.sendFile(path.join(__dirname, '../','views','contact.html'));
}

exports.successForm = (req,res,next) => {
    res.send(res.send('<h1 style="color: green" >Form successfuly filled</h1>'));
}