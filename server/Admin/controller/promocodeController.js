const promocode = require("../models/promocode");

//handling errors
const handleErrors=(err)=>{
    let error= {
        name: '',
        discount: '',
        forServices: '',
        expiresOn: '',
        status : ''
    };

    //duplicate service plan name
    if(err.code === 11000)
    {
        error.name ='Entered promocode name is already present';
        return error;
    }

    if(err.message.includes('promocode validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    }
    return error;
}


//Route handlers

//GET all promocodes details
module.exports.get_promocodes = function(req,res){
    promocode.find({},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};

//GET a specific promocode details
module.exports.get_promocode = function(req,res){
    const id = req.params.id;
    promocode.findById(id,function(err,doc){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }else {
            res.status(201).send(doc);
        }
    });
};

//POST(create) new promocode
module.exports.post_promocodes = async function(req,res){
    const promocodeDetails = req.body;
    promocode.create(promocodeDetails, function(err, result){
        if(err) {
            const error = handleErrors(err);
            res.status(400).json(error);
        } else {
            res.status(201).json(result);
        }
    })
};

//PUT(update) a promocode's details
module.exports.put_promocode =function(req,res){
    const id = req.params.id;
    const newCode = req.body;
    promocode.findByIdAndUpdate(id, newCode, {new:true} , function(err,doc){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }
        else{
            res.status(201).send(doc);
        }
    })
};

//DELETE a promocode
module.exports.delete_promocode = function(req,res){
    const id = req.params.id;
    promocode.findByIdAndDelete(id, function(err,doc){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }
        else{
            res.status(201).send("Document deleted successfully");
        }
    })
};