const {requireAuth} = require('../middleware/authMiddleware');
const {Router} = require('express');
const controller = require('../controllers/scheduledLaterController');
const router = Router();

/**
 * @swagger
 * /scheduledLater:
 *  get:
 *    tags: ['Scheduled Later']
 *    description: Get the list of scheduled later orders 
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/scheduledLater', requireAuth , controller.get_scheduled_orders);


module.exports = router;