var express = require('express');
var app = express();


//setting middleware

app.use('/images', express.static(__dirname + '/views'));
//views folder theke sobkisu browser a show kora jabe.http://localhost:5000/images/index.hbs

app.get('*',(req,res)=>{
    res.send('Hi. ok');
})
// module.exports = function (req, res) {
//     res.send('The views directory is ' + req.app)
// }

 var server = app.listen(3000);