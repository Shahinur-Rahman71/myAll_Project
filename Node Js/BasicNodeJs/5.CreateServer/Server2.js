const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("info.txt", (err, data) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    }
    if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>This is about page</h1>");
      res.end();
    }
    if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>This is Contact page</h1>");
      res.end();
    }
  })
  .listen(5050, () => {
    console.log("Server created!");
  });
