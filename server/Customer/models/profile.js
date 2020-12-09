const mongoose = require('mongoose');
const { isMobilePhone} = require('validator');

const profileSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        unique : true,
        required:[true,"Please enter a name"]
    },
    mobile:{
        type:String,
        required:[true,"Please enter mobile number"],
        unique: true,
        validate:[isMobilePhone,'en-IN',"Enter a valid mobile number"]
    },
    cars:[{
        carName:{
            type:String,
            required:[true,"Enter a car name"],
            lowercase:true
        },
        carModel:{
            type:String,
            required:[true,"Enter the model of the car"]
        }
    }],
    noOfWashes:{
        type:Number,
        default: 0,
        min:0
    },
    addresses:[{
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
        location:{
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
    }]
});

profileSchema.index({"addresses.location" : "2dsphere"});

const customerDetails = mongoose.model('customerdetail',profileSchema);
module.exports = customerDetails;