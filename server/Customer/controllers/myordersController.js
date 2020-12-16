const order = require('../models/order');


//Get accepted orders
module.exports.get_accepted_orders = function(req,res){
    const id = req.userId;
    order.find({$and:[{"userDetails.userId":id},{status:'accepted'}]},function(err,doc){
        if(err){
            res.status(400).json(err);
        } else {
            res.status(201).json(doc);
        }
    })
};

//Get pending orders
module.exports.get_pending_orders = function(req,res){
    const id = req.userId;
    order.find({$and:[{"userDetails.userId":id},{status:'pending'}]},function(err,doc){
        if(err){
            res.status(400).json(err);
        } else {
            res.status(201).json(doc);
        }
    })
};

//Get in-process orders
module.exports.get_inprocess_orders = function(req,res){
    const id = req.userId;
    order.find({$and:[{"userDetails.userId":id},{status:'inprocess'}]},function(err,doc){
        if(err){
            res.status(400).json(err);
        } else {
            res.status(201).json(doc);
        }
    })
};

//Get completed and paid orders
module.exports.get_completed_paid_orders = function(req,res){
    const id = req.userId;
    order.find({$and:[{"userDetails.userId":id},{status:'completed'},{isPaymentDone: 'true'}]},function(err,doc){
        if(err){
            res.status(400).json(err);
        } else {
            res.status(201).json(doc);
        }
    })
};

//Get completed and unpaid orders
module.exports.get_completed_unpaid_orders = function(req,res){
    const id = req.userId;
    order.find({$and:[{"userDetails.userId":id},{status:'completed'},{isPaymentDone: 'false'}]},function(err,doc){
        if(err){
            res.status(400).json(err);
        } else {
            res.status(201).json(doc);
        }
    })
};

//Get cancelled orders
module.exports.get_cancelled_orders = function(req,res){
    const id = req.userId;
    order.find({$and:[{"userDetails.userId":id},{status:'cancelled'}]},function(err,doc){
        if(err){
            res.status(400).json(err);
        } else {
            res.status(201).json(doc);
        }
    })
};

