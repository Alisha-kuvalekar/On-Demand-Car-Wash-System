const mongoose = require('mongoose');

//Connect to promocodes collection to read data
const dbURI="mongodb+srv://Customer:123cust@cluster0.gulvu.mongodb.net/superAdmin?retryWrites=true&w=majority";
const promocodeconn = mongoose.createConnection( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

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
        lowercase: true,
        required: [true, "Please enter the Service for which code will be applicable"]
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

const promocode = promocodeconn.model('promocode',promocodeSchema);

module.exports = promocode;