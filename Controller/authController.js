const authDB = require("../Model/authModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register user 
exports.registerUser = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const { userName, email, password, profile, address, phone } = req.body;
        const user = await authDB.create({
            userName,
            email,
            password,
            profile,
            address,
            phone
        })

        //Success Create User 
        res.status(201).json({
            success: true,
            message: 'Register is Successfully Done',
            user
        })

    } catch (error) {
        res.status(400).json({
            message: "Register is fail!",
            error: error.message
        })
    }
}



//Login User 
exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await authDB.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "You have no account!"
            })
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if (!matchPassword) {
            return res.status(404).json({
                message: "Password doesn't match!"
            })
        }

        //User Token
        const token = jwt.sign({ email, id: user?._id }, process.env.LOGIN_SCREET_TOKEN, {
            expiresIn: '1h'
        })

        //login Success 
        res.status(200).json({
            success: true,
            message: 'Login successfully Done!',
            user,
            token
        })


    } catch (error) {
        res.status(400).json({
            message: "Login is fail!",
            error: error.message
        })
    }
}


//Get all User 
exports.getALlUser = async (req, res, next) => {
    try {
        const users = await authDB.find();

        //success
        res.status(200).json({
            success: true,
            users
        })

    } catch (error) {
        res.status(404).json({
            message: 'User not found!!',
            error: error.message
        })
    }
}

//Get Single Logi User 
exports.getLoginUser = (req, res) => {
    res.send(req.user);
}



//Check Email
exports.checkEmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await authDB.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "You have no account!"
            })
        }

        //User Token
        const token = jwt.sign({ email }, process.env.LOGIN_SCREET_TOKEN, {
            expiresIn: '1h'
        })

        const userId = user?._id;
        //login Success 
        res.status(200).json({
            success: true,
            userId,
            token
        })


        const emailSender = () => {
            var SibApiV3Sdk = require('sib-api-v3-sdk');
            SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.EMAIL_SCRREET_KEY;

            new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({

                "sender": { "email": "bongomedia@gmail.com", "name": "Bongo Entertainment" },
                "subject": "Please Reset Your Password",
                "htmlContent": "<!DOCTYPE html><html><body><h1>Click Reset Password Button</h1><p>Please do not share your reset link</p> <br/><button><a href='https://bongomedia.netlify.app/resetNewPassword'>Reset Password</a></button><br/><h2>Thanks You!</h2></body></html>",
                "messageVersions": [
                    {
                        "to": [
                            {
                                "email": `${user?.email}`,
                                "name": `${user?.userName}`,
                            }
                        ]
                    }
                ]

            }).then(function (data) {
                console.log(data);
            }, function (error) {
                console.error(error);
            });
        }


        emailSender();


    } catch (error) {
        res.status(401).json({
            error: error.message
        })
    }
}



//Reset Password
exports.resetPassword = async (req, res, next) => {
    try {
        const id = req.params.userId;
        const newUserID = await authDB.findById(id);
        if (!newUserID) {
            return res.status(400).json({
                message: 'ID not found!'
            })
        }
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const resetPass = await authDB.findByIdAndUpdate(id, req.body, {
            new: true
        })



        //success
        res.status(200).json({
            success: true,
            resetPass,
            message: 'Password update successfully Done',
        })


    } catch (error) {
        res.status(404).json({
            message: 'Password update Fail',
            error: error.message
        })
    }

}




//Update Profile
exports.updateProfile = async (req, res, next) => {
    try {
        const id = req.params.userId;
        const user = await authDB.findById(id);
        const updateProfile = await authDB.findByIdAndUpdate(id, req.body, {
            new: true
        })
        //success 
        res.status(200).json({
            success: true,
            message: "Update successfully Done!",
            updateProfile
        })
    } catch (error) {
        res.status(404).json({
            message: 'Profile update Fail',
            error: error.message
        })
    }
}


//delete All Users
exports.deleteAllUsers = async (req, res, next) => {
    try {
        const user = await authDB.deleteMany();
        //success 
        res.status(200).json({
            success: true,
            message: "delete All Users successfully Done!",
            user
        })
    } catch (error) {
        res.status(404).json({
            message: 'Delete All Users Fail',
            error: error.message
        })
    }
}