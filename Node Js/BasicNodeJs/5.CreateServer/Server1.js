const http = require('http');
var url = require('url');

http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type': 'text/html'});
    // res.write(req.url);
    var q = url.parse(req.url,true).query;
    var txt = q.year + " "+ q.month;
    res.end(txt);

}).listen(3000,()=>{
    console.log("Server created successfully");
});