const express = require('express');
const app = express();
const cors = require('cors')

//mongodb connection
require('./config/db.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add routers
const userRouter = require('./routes/api/signin');

app.use('', userRouter);

// app.get('', (req, res)=> {
//     res.send('ok');
// })

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})