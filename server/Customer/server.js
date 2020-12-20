const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//routes
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const carRoutes = require('./routes/carRoutes');
const profileRoutes= require('./routes/profileRoutes');
const myordersRoutes = require('./routes/myordersRoutes');
const scheduledLater = require('./routes/scheduledLater');
const leaderboard = require('./routes/leaderboard');
const washerRoute = require('./routes/findWashers');
const serviceAddonPromocode = require('./routes/service_addon_promocode');

const app = express();


//Connect to Customers Database
const dbURI="mongodb+srv://Customer:123cust@cluster0.gulvu.mongodb.net/customers?retryWrites=true&w=majority";
mongoose.connect( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});


//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/uploads/images',express.static('uploads'));
app.use('/',[authRoutes,profileRoutes,orderRoutes,carRoutes,serviceAddonPromocode,myordersRoutes,scheduledLater,leaderboard, washerRoute]);


 
//Swagger Config
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Customer API",
        description: "API's from customer Microservice",
        contact: {
          name: "Alisha Kuvalekar"
        },
        
       server :["http://localhost:3000"],
       
      }
    },
    // ['.routes/*.js']
    apis:  ['./routes/*.js']
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); 



//Listen to port: Default is 3000
const port = process.env.PORT || 3000;
app.listen( port , function(){
    console.log("listening to port ",port);
});


module.exports = app;
