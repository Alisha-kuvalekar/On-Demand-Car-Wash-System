const mongoose = require('mongoose');
const { isEmail } = require('validator');

//connecting to the washers database with admin's credentials
const dbURI = 'mongodb+srv://admin:admin012345@cluster0.gulvu.mongodb.net/washers?retryWrites=true&w=majority';
const conn= mongoose.createConnection( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify : false});

//creating a washers schema 
const washerSchmema = new mongoose.Schema({
    email:{
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate:[isEmail,"Please enter a valid email"]
    },
    password:{
        type: String,
        required: [true,'Please enter a password'],
        minlength: [8,'Minimum length is 8 characters']
    },
    isApproved:{
        type: Boolean,
        default:'false'
    }
});

const washer = conn.model('washer',washerSchmema);

module.exports = washer;