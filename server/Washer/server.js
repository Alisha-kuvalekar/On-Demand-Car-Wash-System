const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const profileRoutes= require('./routes/profileRoutes');
const orderRoutes = require('./routes/orderRoutes');
const myordersRoutes = require('./routes/myordersRoutes');
const scheduledLater = require('./routes/scheduledlaterRoutes');

const app = express();

//Connect to Customers Database
const dbURI="mongodb+srv://Washer:123wash@cluster0.gulvu.mongodb.net/washers?retryWrites=true&w=majority";
mongoose.connect( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/uploads/images',express.static('uploads'));
app.use('/api',[authRoutes,profileRoutes,orderRoutes,myordersRoutes,scheduledLater]);


//Listen to port: Default is 4000
const port = process.env.PORT || 4000;
app.listen( port , function(){
    console.log("listening to port ",port);
});