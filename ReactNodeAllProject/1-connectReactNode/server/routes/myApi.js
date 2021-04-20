const express = require('express');
const router = express.Router();


router.get('/',(req, res, next) => {
    // res.send('myapi from server');
    res.json([
        {id: '1', name: 'shanto'},
        {id: '2', name: 'rakib'}
    ])
});


module.exports = router;