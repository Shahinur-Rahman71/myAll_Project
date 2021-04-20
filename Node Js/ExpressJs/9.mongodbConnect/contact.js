const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.port || 3000;

mongoose.connect('mongodb://localhost:27017/test');
const db = mongoose.connection;

db.on('error',(err)=>{
    console.log('error occured',err);
});

db.once('open',()=>{
    console.log('connection established');
});

const Schema = mongoose.Schema;
const contactSchema = new Schema({
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

var models = mongoose.model('Contact',contactSchema);


app.get('/contact',(req,res)=>{

    const documents = new models({
        name: 'shanto',
        phone: '335555'
    });

    documents.save()
        .then(data => {
            res.json(data);
        })
        .catch(err=>console.log(err));

})

app.get('/show',(req,res)=>{

    models.find()
        .then(data=>{
            res.json(data);
        })
        .catch(err=> console.log(err))

});

app.listen(port,()=>{
    console.log('server is running on port 3000');
});
