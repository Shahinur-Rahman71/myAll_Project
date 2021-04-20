
const router = require('express').Router();

router.get('/login',(req,res)=>{
    res.send('I am login router');
})

router.get('/logout',(req,res)=>{
    res.send('I am logout router');
})

router.get('/signup',(req,res)=>{
    res.send('I am signup router');
})

module.exports = router;