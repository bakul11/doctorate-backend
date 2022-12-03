const { getAllService, postService, singleService } = require('../Controller/serviceController');

const serviceRoute = require('express').Router();

//post service 
serviceRoute.post('/postService', postService);

//Get service 
serviceRoute.get('/getAllService', getAllService);

//Get single service 
serviceRoute.get('/singleService/:serviceId', singleService);


module.exports = serviceRoute;