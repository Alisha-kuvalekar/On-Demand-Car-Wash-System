const mongoose = require('mongoose');
const brcypt = require('bcrypt');
const { isEmail } = require('validator');

const adminSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate:[isEmail,"Please enter a valid email"]
    },
    password:{
        type: String,
        required: [true,'Please enter a password']
    }
});


//Hashing password
adminSchema.pre('save', async function(next){
    const salt = await brcypt.genSalt();
    this.password = await brcypt.hash(this.password, salt);
    next();
});

//Static method to login user
adminSchema.statics.login = async function(email, password){
    const user = await this.findOne({email});
    if(user){
       const auth = await brcypt.compare(password,user.password);
       if(auth){
           return user;
       }
       throw Error('Incorrect Password');
    }
    throw Error('Incorrect email');
}


const admin = mongoose.model('credential',adminSchema);
module.exports = admin;