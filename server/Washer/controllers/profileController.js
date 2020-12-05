const washerDetails = require('../models/profile');
const profileService = require('../services/profileService');


//Defining Routes for profile
module.exports.get_profile= function(req,res){
    //get profile page here
    res.send('hi this is profile page of washer');
}

//post the washer details
module.exports.post_profile= async function(req,res){
   const details = profileService.createPostObject(req.body, req.files); 
   console.log(req.body);
    try {
        const user = await washerDetails.create(details);
        res.status(201).send(user._id);
    } catch (error) {
        res.status(400).json(error);
    }  
}

//fetch the document of washer by Id 
module.exports.get_specific_profile = async function(req,res){
    const _id = req.params.id;
    const washer = await washerDetails.findById(_id).exec();
    res.status(201).json(washer);
}


//find document by Id and update the details
module.exports.update_profile= function(req,res){
    const _id = req.params.id;
    const newData= profileService.createPostObject(req.body, req.files);
    washerDetails.findByIdAndUpdate(_id,newData,{new:true},function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }else {
            res.send(result);
        }
    })
}
