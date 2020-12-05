const mongoose = require('mongoose');


//Connect to service collection to read data
const dbURI="mongodb+srv://Customer:123cust@cluster0.gulvu.mongodb.net/superAdmin?retryWrites=true&w=majority";
const service = mongoose.createConnection( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


//serviceplan schema
const serviceSchema = new mongoose.Schema({
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
    status:{
        type:String,
        lowercase: true,
        default: 'active',
        enum:['active','inactive']
    }
});

const servicePlan = service.model('servicePlan',serviceSchema);

module.exports = servicePlan;