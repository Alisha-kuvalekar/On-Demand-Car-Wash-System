const mongoose = require('mongoose');
//const { isDate } = require('validator');

const promocodeSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:[7,"Minimum length of promocode is 7 characters"],
        unique: true,
        required: [true, "Please enter name of the promocode"]
    },
    discount:{
        type: Number,
        maxlength:3,
        minlength:1,
        required: [true, "Please enter the discount percentage number"]
    },
    forServices:[{
        type: String,
        lowercase: true
    }],
    expiresOn:{
        type: Date,
        required: [true, "Please enter the date of expiration of promocode"]
    },
    status:{
        type:String,
        lowercase: true,
        enum:['active','inactive'],
        default: 'active'
    }
});

const promocode = mongoose.model('promocode',promocodeSchema);

module.exports = promocode;