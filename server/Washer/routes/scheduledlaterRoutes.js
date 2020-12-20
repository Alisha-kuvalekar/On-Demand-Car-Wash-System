const {requireAuth} = require('../middleware/authMiddleware');
const {Router} = require('express');
const controller = require('../controllers/scheduledlaterController');
const router = Router();

/**
 * @swagger
 * /scheduledLater :
 *  get:
 *    tags: ['Profile']
 *    description: Get the list of scheduled orders
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/scheduledLater', requireAuth , controller.get_scheduled_orders);


module.exports = router;