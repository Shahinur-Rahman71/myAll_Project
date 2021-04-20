const Contact = require('../Models/Contact');

// route controller for app.js
const getAllContactController = (req,res, next)=> {

    Contact.find()
        .then(contacts => {
            res.status(200).json({
                message: 'All Contact Showed',
                contacts
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occured',
                Error: err
            })
        })   
}

const postAllContactController = (req, res, next) => {

    const newContact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })

    newContact.save()
        .then(data =>{
            res.status(201).json({
                message: 'contact added',
                newContact: data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occured',
                Error: err
            })
        })
}

//you can get single contact list by getSingleController
const getSingleController = (req, res, next)=> {
    let extractId = req.params.id;
    
    Contact.findById(extractId)
        .then(contacts => {
            res.status(200).json({
                message: 'Single Contact Showed',
                contacts
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occured',
                Error: err
            })
        })
}

//you can delete single contact list by getSingleController
const deleteContact = (req, res, next)=>{
    let id = req.params.id;

    Contact.findByIdAndRemove(id)
        .then(result => {
            res.json({
                message: 'Delete selected Contact',
                result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occured',
                Error: err
            })
        })
}

//you can update single contact list by getSingleController
const updateContact = (req, res, next)=>{
    let id = req.params.id;
    
    let updateQuary = {//This is object
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }

    Contact.findByIdAndUpdate(id, {$set : updateQuary})
        .then(contact => {
            res.json({
                message: "updated successfully",
                contact
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occured',
                Error: err
            })
        })
}

module.exports = {
    getAllContactController,
    postAllContactController,
    getSingleController,
    deleteContact,
    updateContact

}