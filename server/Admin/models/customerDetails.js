const mongoose = require('mongoose');


//connecting to the customers database with admin's credentials
const dbURI = '<mongodb_connection_url>';
const conn= mongoose.createConnection( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify : false});

const customerDetails = conn.model('customerdetail',new mongoose.Schema({}));
const customer = conn.model('customer', new mongoose.Schema({}))


module.exports = {customer,  customerDetails};
