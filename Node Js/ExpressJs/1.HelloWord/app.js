const express = require('express');
const port =process.env.port || 3000;
const app =express();
// route order maintain kore
app.get('/about',(req,res)=>{
    res.send(`<h1>This is about page</h1>`);
});

app.get('/help',(req,res)=>{
    res.send(`<h1>This is help page</h1>`);
})
app.get('/',(req,res)=>{
    res.send(`<h1>Hello Word</h1>`);
})
app.get('*',(req,res)=>{// * means upure er gula sara onno kisu route korle aita kaj korbe
    res.send(`<h1>404 Not Found !!</h1>`);
})

app.listen(port,()=>{
    console.log(`This app listening at http://localhost:${port}`);
})
// console.log(express);