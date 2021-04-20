const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

//custom middleware
function customMiddleware(req,res,next){
    // console.log('I am Locked',req.url);
    if(req.url === '/about'){
        res.send('<h1>Sorry, This page is blocked by admin</h1>');
    }
    next(); // next use korar fole next route gulao kaj korbe.
}

function tinyLogger(){
    return (req,res,next)=>{
        console.log(`${req.method}-${req.url}`);
        next();
    }
}

const allmeddleware =[customMiddleware,tinyLogger()];

app.use(allmeddleware);

app.get('/help',morgan('dev'),(req,res)=>{
    res.json({
        message: 'This is help dexp.'
    });
});

app.get('/about',(req,res)=>{
    res.send('<h1>This is about page.</h1>');
});

app.get('/',(req,res)=>{
    res.send('<h1>This is home page.</h1>');
});

app.get('*',(req,res)=>{
    res.send('<h1>404 Not found</h1>');
});

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})