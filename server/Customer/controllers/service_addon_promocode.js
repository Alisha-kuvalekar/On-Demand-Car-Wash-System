const service = require('../models/service');
const addon = require('../models/addon');
const promocode = require('../models/promocode');
const servicePlan = require('../models/service');

module.exports.get_services = function(req,res){
    servicePlan.find({},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};

module.exports.get_addons = function(req,res){
    const service  = req.params.service;
    addon.find({$and:[{forServices:service},{status:'active'}]},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};

module.exports.get_promocodes = function(req,res){
    const service  = req.params.service;
    promocode.find({$and:[{forServices:service},{status:'active'}]},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};
