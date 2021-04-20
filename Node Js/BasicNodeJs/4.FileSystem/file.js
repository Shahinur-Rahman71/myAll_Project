const fs = require('fs');
const path = require('path');

const myFilePath = path.join(__dirname, 'infos.txt');
const newFilePath = path.join(__dirname, 'student.txt');// for rename file 

if (fs.existsSync(myFilePath)) {
    fs.appendFile(myFilePath, 'Shahinur Rahman shanto ');
    console.log('Saved!');
} else {
    fs.writeFileSync(myFilePath, 'I am a javaScript developer');
}

// fs.writeFile('./info.txt','Hello',function(){

// })

// if (fs.existsSync(myFilePath)) {
//     fs.unlink(myFilePath, () => { // for delete file
//         console.log("Existing file is deleted !");
//     })
// } else {
//     console.log('Existing file is already deleted');
// }

// fs.rename(myFilePath,newFilePath,()=>{
//     console.log('Old file is replaced by new file');
// })