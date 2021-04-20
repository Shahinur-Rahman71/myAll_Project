//for start this project we write => npm run server
//Concurrently run client+server use => npm run dev
const express = require('express');
const app = express();
const port = 5000;

app.get('/api/customer', (req, res) => {
    const myarray = [
        {id: 1, fname: "shanto", lname: "islam"},
        {id: 2, fname: "shfiq", lname: "islam"},
        {id: 3, fname: "rafiq", lname: "islam"}
    ]

    res.json(myarray);
})

app.listen(port, ()=> {
    console.log('Server is runnig on port 5000')
})