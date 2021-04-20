const fs = require('fs');

var readStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
var writeStream = fs.createWriteStream(__dirname+'/writeMe.txt','utf8');
readStream.pipe(writeStream); // pipe korar fole readMe.txt te ja
// ase sob copy hobe writeMe.txt te