const mongoose = require('mongoose');

//Connect to admin db to read data
const admin="mongodb+srv://Customer:123cust@cluster0.gulvu.mongodb.net/superAdmin?retryWrites=true&w=majority";
const conn = mongoose.createConnection( admin,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

//Connect to washers db to read details : to find nearby washers
const washer="mongodb+srv://Customer:123cust@cluster0.gulvu.mongodb.net/washers?retryWrites=true&w=majority";
const washerconn = mongoose.createConnection( washer,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


//from admin db
const car = conn.model('car', new mongoose.Schema({}));
const addon = conn.model('addon',new mongoose.Schema({}));
const promocode = conn.model('promocode',new mongoose.Schema({}));
const servicePlan = conn.model('servicePlan',new mongoose.Schema({}));

//from washer details collection
const washerDetails = washerconn.model('washerdetail',new mongoose.Schema({}))

module.exports = { car,addon,promocode, servicePlan, washerDetails};