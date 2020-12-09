const mongoose = require('mongoose');
//const { isIn } = require('validator');

const serviceplanSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        unique: true,
        required: [true, "Please enter name of the service"]
    },
    time:{
        type: String,
        required: [true, "Please enter time in format: mm-mm , for eg.'50-70' where 50 & 70 are minutes"]
    },
    cost:{
        type:Number,
        min: 1,
        required: [true, "Please enter the cost of the service"]
    },
    description:{
        type: String,
        required: [true, "Please enter the description"]
    },
    status:{
        type:String,
        lowercase: true,
        default: 'active',
        enum:['active','inactive']
    }
});

const servicePlan = mongoose.model('servicePlan',serviceplanSchema);

module.exports = servicePlan;