const express = require('express');
const morgan = require('morgan'); // This is third party middleware
const app = express();
const port = 3000;

// app.use(morgan('dev')); // middleware use korte hole use function call korte hobe.
// every route er jonno kaj korbe use function. that means globaly kaj korbe.

app.get('/about',morgan('dev'),(req,res)=>{
    // just '/about' route er jonno morgan middleware kaj korbe
    res.json({
        message: 'I am a student '
    })
});

app.get('/',(req,res)=>{
    res.send('I am a javascript developer');
});

app.listen(port,()=>{
    console.log(`This server is running on the http://localhost:${port}`);
});