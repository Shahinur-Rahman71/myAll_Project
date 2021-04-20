const express = require('express');
const router = express.Router();


const list = require('../controllers/contactController');
const authenticate = require('../Middleware/authenticate');

// you con show all contact by using getAllcontactController
router.get('/', list.getAllContactController);

// you can include contact by using postAllcontactController
router.post('/', authenticate, list.postAllContactController)
// amra jei route take authenticate korte chassi sei route er purbe authenticate likhe dibo.

//for find single contact
router.get('/:id', list.getSingleController)

router.put('/:id',authenticate, list.updateContact)

router.delete('/:id',authenticate, list.deleteContact)



module.exports = router