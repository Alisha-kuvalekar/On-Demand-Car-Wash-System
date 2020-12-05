const mongoose = require('mongoose');


const addonSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        unique: true,
        required: [true, "Please enter name of the addon"]
    },
    forServices : [{
        type: String,
        lowercase:true,
        required: [true,"Please enter which service is this addon applicable"]
    }],
    cost:{
        type:Number,
        min: 1,
        required: [true, "Please enter the cost of the addon"]
    },
    status:{
        type:String,
        lowercase: true,
        enum:['active','inactive'],
        default: 'active'
    }
});

const addon = mongoose.model('addon', addonSchema);

module.exports = addon;