const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 5050;
const userRouter = require('./userRoute');
const postRouter = require('./postRoute');

app.use(morgan('dev'));

//user router

// const router = express.Router();

// router.get('/login',(req,res)=>{
//     res.send('I am login router');
// })
// router.get('/logout',(req,res)=>{
//     res.send('I am logout router');
// })
// router.get('/signup',(req,res)=>{
//     res.send('I am signup router');
// })

//user router end

// app.use('/user',router);
app.use('/user',userRouter);
app.use('/post',postRouter);

// app.get('/products/:proId/reviews/:revId',(req,res)=>{ // '/product' er pore jetai dei match korbe
//     console.log(req.params);
//     res.send('I am listening ' + req.params.proId);
// })

app.get('/',(req,res)=>{
    res.send('Successfully running...alhamdulillah.');
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
