const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.port || 3000;

//mongodb cononection...
mongoose.connect('mongodb://localhost:27017/test');
const db = mongoose.connection;

db.on('error',(err)=>{
    console.log(err)
});

//'once' it signifies that the event will be called only once.
//'on' signifies the event will be called every time that it occurred

db.once('open',()=>{
    console.log('Database Connection Established');
});

//create schema
const Schema = mongoose.Schema;
const testSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    phone: {
        type: String,
        required: true
    }
});

//Here Test is model
var Test = mongoose.model('Test', testSchema); //(modelName, schema)

app.use(morgan('dev'));

app.get('/test',(req,res)=>{
    // create a document
    const test = new Test({
        name: 'Shahinur Rahman Shanto',
        phone: '02234348'
    });

    test.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => console.log(err))
});

app.get('/get',(req,res)=>{
    //test databse a jakisu ase sob display te show hobe
    Test.find()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            console.log(err)
        })
})

app.get('/',(req,res)=>{
    res.send('Mongodb connected');
});

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
})