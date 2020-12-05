const mongoose = require('mongoose');
const { isMobilePhone} = require('validator');

//Connecting to orders database
const dbURI="mongodb+srv://Washer:123wash@cluster0.gulvu.mongodb.net/orders?retryWrites=true&w=majority";
const orderConn =mongoose.createConnection( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

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
        type: {
            type: String, 
            enum: ['Point'], 
            required: true
        },
          coordinates: {
            type: [Number],
            required: true
        }
    },
    package :{
        type:String,
        lowercase:true,
        required: [true, "Please enter name of the service"]
    },
    addOns:[{
        type:String,
        lowercase:true
    }],
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
            type: {
                type: String, 
                enum: ['Point'], 
                required: true
            },
              coordinates: {
                type: [Number],
                required: true
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
    }      
});

const order = orderConn.model('order',orderSchema);

module.exports = order;