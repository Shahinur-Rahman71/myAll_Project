const express = require('express');
const path = require('path');
var hbs = require('express-handlebars');
const app = express();
const port = 3000;

//  set it only handlebars template engine
app.engine('hbs', hbs({
    extname: "hbs",
    defaultLayout: false,
    layoutsDir: "views/layouts/"
}));

// set jade template engine
// app.set('views','./views');
app.set('views',path.join(__dirname,'views')); // views is folder name and path.join() is file location
// app.set('view engine','jade');

// app.set('view engine','ejs'); // ejs template engine

app.set('view engine','hbs'); // handlebars template engine

app.get('/test',(req,res)=>{
    // res.render('index');
    res.render('index',{
        name: 'shahinur rahman shanto',
        age: 23
    });
})

app.get('/',(req,res)=>{
    res.send('Hello, server is ready man');
});

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
})