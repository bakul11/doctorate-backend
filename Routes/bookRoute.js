const { postBook, getBookingOrder, deleteBooking } = require('../Controller/bookController');

const bookRoute = require('express').Router();

//post booking
bookRoute.post('/postBook', postBook)

//post booking
bookRoute.get('/getBookingOrder/:userId', getBookingOrder)

//delete booking
bookRoute.delete('/deleteBook/:bookId', deleteBooking)

module.exports = bookRoute;