const jwt = require('jsonwebtoken');
const authDB = require('../Model/authModel');


const authGroud = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (token) {
            const sToken = token.split(" ")[1];
            const verifyToken = jwt.verify(sToken, process.env.LOGIN_SCREET_TOKEN);
            const email = verifyToken.email;
            const user = await authDB.findOne({ email });
            req.user = user;
            next();
        }

    } catch (error) {
        res.status(401).json({
            message: 'unAuthorization!'
        })
    }

}

module.exports = authGroud;