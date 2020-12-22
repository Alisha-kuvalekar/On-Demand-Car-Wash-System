const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const { washerDetails } = require('../models/readonlydata');
const router = Router();

/**
 * @swagger
 * /findWashers:
 *  get:
 *    tags: ['get washers']
 *    description: Get the list of approved washers
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401' :
 *        description: Error occured
 */
router.get('/findWashers',  requireAuth ,  function(req,res){
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