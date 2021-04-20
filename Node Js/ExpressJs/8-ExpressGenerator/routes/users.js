var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static('public'));

router.get('/all/:from-:to',(req,res)=>{
    res.send(req.params);
})

module.exports = app;
