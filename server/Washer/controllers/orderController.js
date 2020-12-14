const order = require('../models/order');

module.exports.get_orders = function(req,res){
    const id = req.userId;
    order.find({"washerDetails.washerId": id},function(err,doc){
        if(err){
            res.status(400).json(err);
        }else{
            res.status(201).send(doc);
        }
    })
};

module.exports.get_order = function(req,res){
    const id = req.params.orderId;
    order.findById(id, function(err,doc){
        if(err){
            res.status(400).json(err);
        }else{
            res.status(201).json(doc);
        }
    })
};

module.exports.accept_order = function(req,res){
    const id = req.params.orderId;
    order.findByIdAndUpdate(id, {$set:{status:'accepted'}},{new:true} ,function(err,doc){
        if(err){
            res.status(400).json(err);
        }else{
            res.status(200).json(doc);
        }
    })
};

module,exports.reject_order = function(req,res){
    const id = req.params.orderId;
    order.findByIdAndUpdate(id, {$set:{status:'cancelled'}},{new:true} ,function(err,doc){
        if(err){
            res.status(400).json(err);
        }else{
            res.status(200).json(doc);
        }
    })
};

module.exports.inprocess_order = function(req,res){
    const id = req.params.orderId;
    order.findByIdAndUpdate(id, {$set:{status:'inprocess'}},{new:true} ,function(err,doc){
        if(err){
            res.status(400).json(err);
        }else{
            res.status(200).json(doc);
        }
    })
};

module.exports.completed_order = function(req,res){
    const id = req.params.orderId;
    order.findByIdAndUpdate(id, {$set:{status:'completed'}},{new:true} ,function(err,doc){
        if(err){
            res.status(400).json(err);
        }else{
            res.status(200).send(doc);
        }
    })
};