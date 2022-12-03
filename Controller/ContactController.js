const contactDB = require("../Model/contactModel")

//postContact 
exports.postContact = async (req, res, next) => {
    try {
        const contact = await contactDB.create(req.body);

        //success 
        res.status(201).json({
            message: 'Message sent Successful done!',
            success: true,
            contact
        })

    } catch (error) {
        res.status(400).json({
            message: 'Message sent Fail Please try aggain!',
            error: error.message
        })
    }
}