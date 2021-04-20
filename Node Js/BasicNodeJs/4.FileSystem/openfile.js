const fs = require("fs");
const path = require('path');

console.log(path.join(__filename));
let fd =fs.openSync('studen.txt','a');

 fs.unlinkSync('studen.txt');
fs.closeSync(fd);