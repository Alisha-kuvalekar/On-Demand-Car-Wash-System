const mongoose = require('mongoose');

//Connect to cars collection to read data
const dbURI="mongodb+srv://Customer:123cust@cluster0.gulvu.mongodb.net/superAdmin?retryWrites=true&w=majority";
const conn = mongoose.createConnection( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


const car = conn.model('car', new mongoose.Schema({}));
const addon = conn.model('addon',new mongoose.Schema({}));
const promocode = conn.model('promocode',new mongoose.Schema({}));
const servicePlan = conn.model('servicePlan',new mongoose.Schema({}));

module.exports = { car,addon,promocode, servicePlan};