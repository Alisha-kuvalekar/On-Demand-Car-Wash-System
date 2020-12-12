const mongoose = require('mongoose');
const { isMobilePhone} = require('validator');

const profileSchema = new mongoose.Schema({
    userId:{
        type: String,
        unique:true,
        required: [true,"please enter customerId"]
    },
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
    car:{
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
    noOfWashes:{
        type:Number,
        default: 0,
        min:0
    },
    addresses:{
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
});


const customerDetails = mongoose.model('customerdetail',profileSchema);
module.exports = customerDetails;