const { postContact } = require('../Controller/ContactController');

const contactRoute = require('express').Router();

//post Contact Routes 
contactRoute.post('/postContact', postContact)



module.exports = contactRoute;