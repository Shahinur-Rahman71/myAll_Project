const http = require('http'); // Here http is a nodejs core module.
const fs = require('fs');
const path = require('path');

const Server = http.createServer((req,res)=>{

    if(req.url === '/hello'){
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end("Shanto islam");
    }
    else if(req.url === '/shanto'){
        const users = [
            {
                id: 1,
                name: 'shahinur rahman'
            }
        ];
        res.writeHead(200,{'Content-Type': 'text/json'});
        res.end(JSON.stringify(users));
    }
    else{
        //for read data and show to the text file
        fs.writeFileSync(path.join(__dirname,'info.txt'), 'I am a javaScript developer');

        const stream = fs.createReadStream(path.join(__dirname,'info.txt'));

        res.writeHead(200,{'Content-Type': 'text/plain'});
        stream.pipe(res)
    }
    
});

Server.listen(3000,()=>{
    console.log("Server created successfully");
});