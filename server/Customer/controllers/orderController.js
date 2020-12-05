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

module.exports.create_order = async function(req,res){
    const newOrder = req.body;
    try {
        const doc = await order.create(newOrder);
        res.status(400).send(doc);
    } catch (error) {
        console.log(error);
        const err= handleErrors(error);
        res.status(400).json(err);
    }
};

module.exports.cancel_order = function(req,res){
    const id = req.params.id;
    order.findByIdAndUpdate(id, {$set:{status: 'cancelled'}}, {new:true} , function(err,doc){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }
        else{
            res.status(201).send(doc);
        }
    })
};