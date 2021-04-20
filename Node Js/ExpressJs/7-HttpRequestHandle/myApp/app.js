const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const books =['math','english','bangla','islam shikka'];

app.use(bodyParser.urlencoded({extended: true}));

app.all('/',(req,res,next)=>{
    console.log('http method handle');
    next();
})

app.route('/')
    .get((req,res)=>{
        res.render('index.jade',{
            book: books
        })
    })
    .post((req,res)=>{
        books.push(req.body.book);
        res.redirect('/');
    })

// app.get('/',(req,res)=>{
//     res.render('index.jade',{
//         book: books
//     })
// });

// app.post('/',(req,res)=>{
//     books.push(req.body.book);
//     res.redirect('/');
// })

app.listen(port,()=>{
    console.log(`This server is running on port http://localhost:${port}`);
})