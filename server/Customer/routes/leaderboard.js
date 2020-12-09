const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const customerDetails = require('../models/profile');
const router = Router();

//Get the leaderboard list
router.get('/leaderboard', requireAuth ,function(req,res){
    customerDetails.find({},function(err,doc){
        if(err){
            res.status(400).json(err);
        } else {
            res.status(200).send(doc);
        }
    }).sort({noOfWashes : -1});
});


module.exports = router;