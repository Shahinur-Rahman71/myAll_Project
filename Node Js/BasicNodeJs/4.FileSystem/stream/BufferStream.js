
const fs = require('fs');
const path = require('path');

// fs.readFile(path.join(__dirname,'student.txt'),'utf-8',(err,data)=>{//utf-8 is encoding
//     if(err){
//         console.log(err.message);
//     }
//     console.log(data);
// });


const stream = fs.createReadStream(path.join(__dirname,'student.txt'));
const WriteStream = fs.createWriteStream(path.join(__dirname, 'stream.txt'));

stream.once('data',()=>{
    console.log('Starting to reading data');
});

stream.on('data',(chunk)=>{
    WriteStream.write(chunk);
    console.log(chunk.toString());
});

