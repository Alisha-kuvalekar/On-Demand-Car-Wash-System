const washer = require('../models/washer');
const mail = require('../services/mail');
module.exports.get_all_washers = function(req, res){
    washer.find({},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};

module.exports.get_washers = function(req,res){
    washer.find({isApproved: false},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};

module.exports.update_washer = function(req,res){
    const id = req.params.id;
    washer.findByIdAndUpdate(id, {$set :{isApproved : true}}, {new:true} , function(err,doc){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.status(201).send(doc);
        }
    })

};

module.exports.delete_washer = function(req,res){
    const id = req.params.id;
    washer.findByIdAndDelete(id, function(err,doc){
        if(err){
            res.status(400).json(err);
        }
        else{
            mail.mailToWasher(doc.email);
            res.status(201).send("Document deleted successfully");
        }
    });
    
};
