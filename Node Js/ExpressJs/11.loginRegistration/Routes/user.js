const express = require('express');
const { registrationController, getAllUsers, loginController } = require('../controllers/userController');
const authenticate = require('../Middleware/authenticate');
const router = express.Router();



router.post('/login', loginController);

router.post('/registration', registrationController);

router.get('/alluser',authenticate, getAllUsers);
// amra jei route take authenticate korte chassi sei route er purbe authenticate likhe dibo.

module.exports = router;