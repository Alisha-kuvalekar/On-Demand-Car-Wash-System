const servicePlan = require('../models/serviceplan');


//handle errors
const handleErrors=(err)=>{
    let error= {
        name: '',
        time: '',
        cost: '',
        description:'',
        status:''
    };

    //duplicate service plan name
    if(err.code === 11000)
    {
        error.name ='Entered service plan name is already present';
        return error;
    }

    if(err.message.includes('servicePlan validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    }
    return error;
}


 
//Route handlers

//Get all services from the database
module.exports.get_Services = function(req,res){
    servicePlan.find({},function(err,docs){
        if(err){
            const error= handleErrors(err);
            res.status(400).json(error);
        }else {
            res.status(201).json(docs);
        }
    })
};


//Get one service from database by Id
module.exports.get_Service = function(req,res){
    const id = req.params.id;
    servicePlan.findById(id,function(err,doc){
        if(err){
            const error = handleErrors(err);
            res.status(400).json(error);
        }else {
            res.status(201).json(doc);
        }
    });
};

//Create and save a service in database
module.exports.post_Service = function(req,res){
    const serviceDetails = req.body;
    servicePlan.create(serviceDetails, function(err, result){
        if(err){
            const error= handleErrors(err);
            res.status(400).json(error);
        } else {
            res.status(201).json(result);
        }
    })
};

//Fetch a service from database by Id and update
module.exports.put_Service = function(req,res){
    const id = req.params.id;
    const newService = req.body;
    servicePlan.findByIdAndUpdate(id, newService, {new:true} , function(err,doc){
        if(err){
            const error = handleErrors(err);
            res.status(400).json(error);
        }
        else{
            res.status(201).json(doc);
        }
    })
};

//Fetch a service from database by Id and delete 
module.exports.delete_Service = function(req,res)
{
    const id = req.params.id;
    servicePlan.findByIdAndDelete(id, function(err,doc){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }
        else{
            res.status(201).json(doc);
        }
    })
};


//Get active services from the database
module.exports.get_Active_Services = function(req,res){
    servicePlan.find({status: 'active'},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};

//get count of active services
module.exports.get_Count_Active_Services = function(req,res){
    servicePlan.count({status: 'active'}, function(err,count){
        if(err){
            res.status(400).json(err)
        } else {
            res.status(201).json(count)
        }
    })
}