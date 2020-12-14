const washerDetails = require('../models/profile');
//const profileService = require('../services/profileService');

const handleErrors=(err)=>{
    let error= {};

    //duplicate error code
    if(err.code === 11000  && err.message.includes('userId_1 dup key'))
    { 
        error.userId ='Entered userId is already registered';
        return error;
    }
    if(err.code === 11000  && err.message.includes('name_1 dup key'))
    { 
        error.name ='Entered name is already registered';
        return error;
    }
    if(err.code === 11000  && err.message.includes('mobile_1 dup key'))
    {
        error.mobile ='Entered mobile number is already registered';
        return error;
    }
      

    if(err.message.includes('washerdetail validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    }
    return error;
}

//Defining Routes for profile
module.exports.get_profile= function(req,res){
    //get profile page here
    res.send('hi this is profile page of washer');
}

//post the washer details
module.exports.post_profile= async function(req,res){
    const details = req.body;
    details.userId = req.userId;
    washerDetails.create(details, function(err,result){
        if(err){
            const error = handleErrors(err);
            res.status(400).json(error);
        } else {
            res.status(201).json(result)
        }
    })
}

//fetch the document of washer by Id 
module.exports.get_specific_profile = function(req,res){
    const _id = req.userId;
    washerDetails.find({"userId" : _id}, function(err,result){
        if(err){
            res.status(401).send(err);
        }
        else{
            res.status(201).json(result)
        }
    })
}


//find document by Id and update the details
module.exports.update_profile= function(req,res){
    const _id = req.userId;
    const newData = req.body;
    washerDetails.findOneAndUpdate({"userId" : _id}, newData,  {new:true} ,function(err,result){
        if(err){
            const error = handleErrors(err);
            res.status(400).json(error);
        }else {
            res.status(201).json(result);
        }
    })
}
