const fs = require('fs');
const path = require('path');
// console.log(__dirname);

const mypath = path.join(__dirname, 'new.txt');

if (fs.existsSync(mypath)) {
    fs.unlink(mypath, () => {
        console.log('delete file!');
    })
} else {
    fs.writeFileSync(mypath, 'I am a javaScript developer');
}

