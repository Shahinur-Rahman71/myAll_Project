const createRouter = require('./Routes/app');
const port = process.env.port || 3000;
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');



mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/contacts-db');
const db = mongoose.connection;

db.on('error',(err)=>{
    console.log(err)
});

db.once('open',()=>{
    console.log('Database Connection Established');
});

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
 //bodyparser age a use korte hobe that means app.use('/', createRouter) er agee.

app.use('/api/contacts', createRouter);
app.use(cors());


app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
})