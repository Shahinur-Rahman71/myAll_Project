var express = require('express');
var app = express();
var router = express.Router();

app.use('/images', express.static(__dirname + '/views'));
//views folder theke sobkisu browser a show kora jabe.
//http://localhost:5000/images/index.hbs

app.param('id', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE')
  next()
})

app.get('/user/:id', function (req, res, next) {
  console.log('although this matches')
  next()
})

app.get('/user/:id', function (req, res) {
  console.log('and this matches too')
  res.end()
})

var server = app.listen(5000);