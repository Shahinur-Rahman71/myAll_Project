const http = require('http');
const fs = require('fs');

fs.appendFile('append.txt','Created by shanto',(err)=>{
    if(err) throw err;
    console.log("Hello content");
})