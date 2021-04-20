var fs = require("fs");

//create an empty file named mynewfile2.txt:
try {
  fs.open("open.txt", "w", function (err, file) {
    // w means writing. aikhane w ditei hobe.
    if (err) throw err;
    console.log("Saved!");
  });
}catch(err){
  console.log('error found',err);
}
