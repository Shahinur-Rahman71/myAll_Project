const express = require('express');
const router = require('./Router/allRouter');
const app = express();
const port = process.env.port || 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo_Application')
    .then( ()=> {
        console.log('Database Connected')
    })
    .catch( err => {
        console.log(err)
    })


app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', router);

app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})