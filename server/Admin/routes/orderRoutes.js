const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const  order  = require('../models/order');
const router = Router();

/**
 * @swagger
 * /completedOrdersCount:
 *  get:
 *    tags: ['completed Orders']
 *    description: Get the completed orders count
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/completedOrdersCount', requireAuth ,function(req,res){
    order.count({status : 'completed'},function(err,count){
        if(err){
            res.status(400).json(err);
        } else {
            res.status(200).json(count);
        }
    })
});

module.exports = router;