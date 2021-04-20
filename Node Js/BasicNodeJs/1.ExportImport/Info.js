const os= require('os');
//This is os module
const path= require('path');
//This is path modle

console.log(os.freemem());
console.log(os.userInfo().username);
console.log(os.platform());

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.join(__dirname,'AnotherFolderName','ExportFirst.js'));
console.log(path.normalize('.///1.ExportImport//ImportFirst.js'));
//This is not valid path. But normalize valided it.

 console.log(process);