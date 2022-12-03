const { registerUser, loginUser, resetPassword, getLoginUser, deleteAllUsers, getALlUser, checkEmail, updateProfile } = require('../Controller/authController');
const authGroud = require('../Middleware/authGroud');

const authRoute = require('express').Router();

//Register user
authRoute.post('/register', registerUser);

//Login User
authRoute.post('/login', loginUser);


//Get all User
authRoute.get('/allAuthUsers', getALlUser);


//Get all User
authRoute.put('/updateProfile/:userId', updateProfile);


//delete all User
authRoute.delete('/deleteAllUsers', deleteAllUsers);


//Get single Login User
authRoute.get('/activeUser', authGroud, getLoginUser);


//Check Email for Reset Password
authRoute.post('/checkEmail', checkEmail);

//Reset Password User
authRoute.put('/resetPassword/:userId', resetPassword);


module.exports = authRoute;