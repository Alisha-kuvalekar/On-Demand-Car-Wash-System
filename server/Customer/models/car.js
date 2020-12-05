const mongoose = require('mongoose');

//Connect to cars collection to read data
const dbURI="mongodb+srv://Customer:123cust@cluster0.gulvu.mongodb.net/superAdmin?retryWrites=true&w=majority";
const carconn = mongoose.createConnection( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


const carSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        required: [true, "Please enter name of the car"]
    },
    model:{
        type: String,
        unique: true,
        required: [true, "Please enter the model of the car"]
    },
    status:{
        type:String,
        lowercase: true,
        enum:['active','inactive'],
        default: 'active'
    }
});


const car = carconn.model('car', carSchema);

module.exports = car;