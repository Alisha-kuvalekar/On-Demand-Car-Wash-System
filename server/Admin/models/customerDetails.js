const mongoose = require('mongoose');


//connecting to the customers database with admin's credentials
const dbURI = 'mongodb+srv://admin:admin012345@cluster0.gulvu.mongodb.net/customers?retryWrites=true&w=majority';
const conn= mongoose.createConnection( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify : false});

const customerDetails = conn.model('customerdetail',new mongoose.Schema({}));

module.exports = customerDetails;
