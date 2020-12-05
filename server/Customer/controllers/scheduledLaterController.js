const order = require('../models/order');

module.exports.get_scheduled_orders = function(req,res){
    const id = req.params.id;
    order.find({$and:[{"userDetails.userId":id},{isScheduledLater:true}]},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};