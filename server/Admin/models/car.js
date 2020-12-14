const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        required: [true, "Please enter name of the car"]
    },
    model:{
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Please enter the model of the car"]
    },
    status:{
        type:String,
        lowercase: true,
        enum:['active','inactive'],
        default: 'active'
    }
});


const car = mongoose.model('car', carSchema);

module.exports = car;