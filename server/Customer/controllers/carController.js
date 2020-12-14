const {car} = require('../models/readonlydata');

module.exports.get_cars = function(req,res){
    car.find({status:'active'},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).json(docs);
        }
    })
};