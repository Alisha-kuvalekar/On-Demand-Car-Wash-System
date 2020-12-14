const addOn = require('../models/addon');


//handling errors
const handleErrors=(err)=>{
    let error= {
        name: '',
        forServices: '',
        cost: '',
        status : ''
    };

    //duplicate service plan name
    if(err.code === 11000)
    {
        error.name ='Entered addon name is already present';
        return error; 
    }

    if(err.message.includes('addon validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    }
    return error;
}


//Route handlers

//GET all Addons details
module.exports.get_addons = function(req,res){
    addOn.find({},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};

//GET a specific Addon details
module.exports.get_addon = function(req,res){
    const id = req.params.id;
    addOn.findById(id,function(err,doc){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }else {
            res.status(201).send(doc);
        }
    });
};

//POST(create) new addon
module.exports.post_addons = async function(req,res){
    const addonDetails = req.body;
    addOn.create(addonDetails, function(err, result){
        if(err){
            const error = handleErrors(err);
            res.status(400).json(error)
        } else {
            res.status(200).json(result)
        }
    })
};

//PUT(update) a addon's details
module.exports.put_addons =function(req,res){
    const id = req.params.id;
    const newaddon = req.body;
    addOn.findByIdAndUpdate(id, newaddon, {new:true} , function(err,doc){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }
        else{
            res.status(201).json(doc);
        }
    })
};

//DELETE a addon
module.exports.delete_addons = function(req,res){
    const id = req.params.id;
    addOn.findByIdAndDelete(id, function(err,doc){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }
        else{
            res.status(201).json(doc);
        }
    })
};