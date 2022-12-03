const bookDB = require("../Model/bookModel")

exports.postBook = async (req, res, next) => {
    try {
        const book = await bookDB.create(req.body);
        
        //success booking
        res.status(201).json({
            message: 'Appointment Booking successfully done!',
            success: true,
            book
        })

    } catch (error) {
        res.status(400).json({
            message: 'Booking fail please try aggain',
            error: error.message
        })
    }
}


//Get user base booking

exports.getBookingOrder = async (req, res, next) => {
    try {
        const id = req.params.userId;
        const findOrder = { userId: id };
        const book = await bookDB.find(findOrder)
        //success 
        res.status(200).json({
            success: true,
            book
        })
    } catch (error) {
        res.status(404).json({
            message: 'Booking Data Not found!',
            error: error.message
        })
    }
}


//Delete Booking
exports.deleteBooking = async (req, res, next) => {
    try {
        const id = req.params.bookId;
        const findOrder = await bookDB.findById(id);
        const book = await bookDB.findByIdAndDelete(findOrder);
        //success 
        res.status(200).json({
            success: true,
            message: 'Booking Delete successfully done!',
            book
        })
    } catch (error) {
        res.status(404).json({
            message: 'Booking Delete fail!',
            error: error.message
        })
    }
}