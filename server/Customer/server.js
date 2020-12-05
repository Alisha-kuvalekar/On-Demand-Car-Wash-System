const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const carRoutes = require('./routes/carRoutes');
const profileRoutes= require('./routes/profileRoutes');
const myordersRoutes = require('./routes/myordersRoutes');
const scheduledLater = require('./routes/scheduledLater');
const leaderboard = require('./routes/leaderboard');
const serviceAddonPromocode = require('./routes/service_addon_promocode');


const app = express();

//Connect to Customers Database
const dbURI="mongodb+srv://Customer:123cust@cluster0.gulvu.mongodb.net/customers?retryWrites=true&w=majority";
mongoose.connect( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/uploads/images',express.static('uploads'));
app.use('/api',[authRoutes,profileRoutes,orderRoutes,carRoutes,serviceAddonPromocode,myordersRoutes,scheduledLater,leaderboard]);



//Listen to port: Default is 3000
const port = process.env.PORT || 3000;
app.listen( port , function(){
    console.log("listening to port ",port);
});