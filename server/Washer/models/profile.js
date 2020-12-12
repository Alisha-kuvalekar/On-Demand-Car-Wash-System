const mongoose = require('mongoose');
const { isMobilePhone } = require('validator');

const profileSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        unique: true,
        required:[true,"Please enter your name"]
    },
    mobile:{
        type:String,
        required:[true,"Please enter mobile number"],
        unique: true,
        validate:[isMobilePhone,'en-IN',"Enter a valid mobile number"]
    },
    profilePicture:{
        type:String,
        required: [true, "Please upload your picture"]
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
        zipcode:{
            type: Number,
            required: [true, "Please enter a zipcode"]
        }
    }],
    noOfWashes:{
        type:Number,
        default: 0
    }
});


const washerDetails = mongoose.model('washerDetail',profileSchema);
module.exports = washerDetails;