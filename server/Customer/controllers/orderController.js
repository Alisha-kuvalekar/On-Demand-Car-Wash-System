const order = require('../models/order');


//handle errors
const handleErrors=(err)=>{
    let error= {};

    if(err.message.includes('order validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    }
    return error;
}


module.exports.get_order= function(req,res){
    //get page to book a order
    res.send("This is the order booking page");
};

module.exports.create_order = function(req,res){
    const newOrder = req.body;
    order.create(newOrder, function(err,result){
        if(err){
            const error = handleErrors(err);
            res.status(400).json(error);
        } else {
            res.status(201).json(result);
        }
    })
};

module.exports.cancel_order = function(req,res){
    const id = req.params.id;
    order.findByIdAndUpdate(id, {$set:{status: 'cancelled'}}, {new:true} , function(err,doc){
        if(err){
            const error = handleErrors(err)
            res.status(400).json(error);
        }
        else{
            res.status(201).json(doc);
        }
    })
};