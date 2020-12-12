const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const { washerDetails } = require('../models/readonlydata');
const router = Router();

//Get the leaderboard list
router.get('/findWashers', requireAuth ,function(req,res){
    washerDetails.find({}, function(err, result){
        if(err){
            console.log(err)
            res.status(401).send(err);
        } else {
            res.status(200).send(result);
        }
    })
});

module.exports =router;