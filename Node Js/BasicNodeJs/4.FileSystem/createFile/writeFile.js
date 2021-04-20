const fs = require("fs");

const obj = {
  name: "shanto islam",
  village: "meherchandi",
  univercity: {
    dept: "cse",
    year: "4th",
    semester: "2nd",
  },
};

const str = JSON.stringify(obj);

fs.writeFile("write.txt", str, (err) => {
  if (err) throw err;

  console.log("Saved!");
});
