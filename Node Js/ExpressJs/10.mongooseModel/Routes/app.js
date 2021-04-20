const express = require('express');
const router = express.Router();

const list = require('../controllers/contactController');

// you con show all contact by using getAllcontactController
router.get('/', list.getAllContactController);

// you can include contact by using postAllcontactController
router.post('/', list.postAllContactController)

//for find single contact
router.get('/:id', list.getSingleController)

router.put('/:id', list.updateContact)

router.delete('/:id', list.deleteContact)

//input: http://localhost:3000/api/contacts/5f40fab184bb512ee06a1666 
//Here 5f40fab184bb512ee06a1666 is id that have auto generated when you push data.

module.exports = router