const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//Importing routes
const servicePlanRoutes = require('./routes/serviceplanRoutes');
const promocodeRoutes = require('./routes/promocodeRoutes');
const washerRoutes = require('./routes/washerRoutes');
const addonRoutes = require('./routes/addonRoutes');
const leaderboard = require('./routes/leaderboard');
const authRoutes = require('./routes/authRoutes');
const carRoutes = require('./routes/carRoutes');

const app = express();

//connect to database
const dbURI = 'mongodb+srv://admin:admin012345@cluster0.gulvu.mongodb.net/superAdmin?retryWrites=true&w=majority';
mongoose.connect( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify : false});

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', [servicePlanRoutes, promocodeRoutes,addonRoutes, authRoutes,carRoutes,washerRoutes,leaderboard]);


//Listen to port : default is 2000
const port = process.env.PORT || 2000;
app.listen(port,function(){
    console.log("Listening to port:",port);
})
