const mongoose = require('mongoose');
const { isMobilePhone} = require('validator');


//Connecting to orders database
const dbURI="<mongodb_connection_url>";
const orderConn =mongoose.createConnection( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

const orderSchema = new mongoose.Schema({
    userDetails :{
        userId:{ 
            type: String,
            required: [true,"please enter customerId"]
        },
        name:{
            type:String,
            lowercase:true,
            required:[true,"Please enter a name"]
        },
        mobile:{
            type: String,
            required:[true,"Please enter mobile number"],
            validate:[isMobilePhone,'en-IN',"Enter a valid mobile number"]
        }
    },
    address:{
        country:{
            type:String,
            lowercase: true,
            required :[true,"Please enter the country name"]
        },
        city:{
            type:String,
            lowercase: true,
            required :[true,"Please enter the city name"]
        },
        address:{
            type:String,
            lowercase: true,
            required :[true,"Please enter the address"]
        },
        zipcode:{
            type: Number,
            required: [true, "Please enter a zipcode"]
        }
    },
    package :{
        type:String,
        lowercase:true,
        required: [true, "Please enter name of the service"]
    },
    addOn:{
        type:String,
        lowercase:true
    },
    carInfo:{
        carName:{
            type:String,
            required:[true,"Enter a car name"],
            lowercase:true
        },
        carModel:{
            type:String,
            required:[true,"Enter the model of the car"]
        }
    },
    dateTime:{
        type: Date,
        required:[true, "Please enter the date and time of the wash"]
    },
    washerDetails:{
        washerId:{
            type: String,
            required: [true,"please enter id of washer"]
        },
        name:{
            type:String,
            lowercase:true,
            required:[true,"Please enter your name"]
        },
        mobile:{
            type:String,
            required:[true,"Please enter mobile number"],
            validate:[isMobilePhone,"Enter a valid mobile number"]
        },
        address:{
            country:{
                type:String,
                lowercase: true,
                required :[true,"Please enter the country name"]
            },
            city:{
                type:String,
                lowercase: true,
                required :[true,"Please enter the city name"]
            },
            address:{
                type:String,
                lowercase: true,
                required :[true,"Please enter the address"]
            },
            zipcode:{
                type: Number,
                required: [true, "Please enter a zipcode"]
            }
        }
    },
    totalCost:{
        type:Number,
        default: 0,
        min: 0,
        required: [true, "Please enter the total amount of the order"]
    },
    status:{
        type:String,
        lowercase:true,
        default:'pending',
        enum:['pending','accepted','inprocess','completed','cancelled']
    },
    isScheduledLater:{
        type: Boolean,
        lowercase:true,
        default: false
    },
    instructionByUser:{
        type: String,
        lowercase: true
    },
    isPaymentDone :{
        type: Boolean,
        default: false,
        lowercase: true
    }      
});


const order = orderConn.model('order',orderSchema);

module.exports = order;
