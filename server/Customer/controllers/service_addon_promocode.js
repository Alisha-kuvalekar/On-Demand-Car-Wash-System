const { addon, promocode, servicePlan } = require('../models/readonlydata');
const axios = require('axios');

/* const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzdmZTVlNGJiMmNkMWVlMDQyYTU2NiIsImlhdCI6MTYwNzMyNjI0OSwiZXhwIjoxNjA3NDk5MDQ5fQ.5irjQ1H9bKtIuvmZe2Avfkmq8qcvhFhNT6Y7mxuaDZo';
const authAxios = axios.create({
    baseURL : 'http://127.0.0.1:2000/api',
    headers :{
        Authorization: `Bearer ${accessToken}`
    }
}) */
module.exports.get_ui_services = function(req,res){
    servicePlan.find({status: 'active'},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).json(docs);
        }
    })
    
};

module.exports.get_services = function(req,res){
    servicePlan.find({status: 'active'},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).json(docs);
        }
    })
    
};

module.exports.get_addons = function(req,res){
    const service  = req.params.service;
    addon.find({$and:[{forServices:service},{status:'active'}]},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).json(docs);
        }
    })
};

module.exports.get_promocodes = function(req,res){
    const service  = req.params.service;
    promocode.find({$and:[{forServices:service},{status:'active'}]},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).json(docs);
        }
    })
};
