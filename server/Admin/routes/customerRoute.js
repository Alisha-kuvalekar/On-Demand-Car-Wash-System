const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const {customer} = require('../models/customerDetails');
const router = Router();

//Get the leaderboard list
router.get('/customersCount', requireAuth ,function(req,res){
    customer.count({},function(err,doc){
        if(err){
            res.status(400).json(err);
        } else {
            res.status(200).json(doc);
        }
    })
});

module.exports = router;