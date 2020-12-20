const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const {customerDetails }= require('../models/customerDetails');
const router = Router();

/**
 * @swagger
 * /leaderboard:
 *  get:
 *    tags: ['Leaderboard']
 *    description: Get the leaderboard list
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
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