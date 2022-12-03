const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


//MiddleWare 
const cors = require('cors');
app.use(cors())
app.use(express.json())

//Dot Env 
require('dotenv').config()

//import Database 
const conectDB = require('./Configration/ConnectDB');

//All Routes Import Here
const authRoute = require('./Routes/authRoute');
const blogRoute = require('./Routes/blogRoute');
const contactRoute = require('./Routes/ContactRoute');
const serviceRoute = require('./Routes/serviceRoute');
const bookRoute = require('./Routes/bookRoute');



//Auth Routes 
app.use('/auth', authRoute);

//Blog Routes
app.use('/blog', blogRoute);

//Contact Routes
app.use('/contact', contactRoute);

//Services Routes
app.use('/service', serviceRoute);

//Booking Routes
app.use('/book', bookRoute);

app.get('/', (req, res) => {
    res.send('Server start success')
})


app.listen(port, () => {
    console.log(`Server started successfully done ${port}`);
    conectDB();
})