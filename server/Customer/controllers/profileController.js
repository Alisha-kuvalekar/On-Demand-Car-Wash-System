const customerDetails = require('../models/profile');
//const profileService = require('../services/profileService');

//handle errors
const handleErrors=(err)=>{
    let error= {};

    //duplicate error code
    if(err.code === 11000  && err.message.includes('name_1 dup key'))
    { 
        error.email ='Entered name is already registered';
        return error;
    }
    if(err.code === 11000  && err.message.includes('mobile_1 dup key'))
    {
        error.email ='Entered mobile number is already registered';
        return error;
    }
      

    if(err.message.includes('customerdetail validation failed'))
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
    res.send('hi this is profile page of customer');
}

//post the user details
module.exports.post_profile= async function(req,res){
   const details = req.body;
   console.log(req.body);
    try {
        const user = await customerDetails.create(details);
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        const err = handleErrors(error);
        res.status(400).json(err);
    }  
}

//fetch the document of customer by Id 
module.exports.get_specific_profile = async function(req,res){
    const _id = req.params.id;
    const customer = await customerDetails.findById(_id).exec();
    res.status(201).json(customer);
}


//find document by Id and update the details
module.exports.update_profile= async function(req,res){
    const _id = req.params.id;
    const newData = req.body;
    customerDetails.findByIdAndUpdate(_id,newData, {new:true} ,function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }else {
            res.send(result);
        }
    })
}


