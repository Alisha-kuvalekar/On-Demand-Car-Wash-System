const {Router} = require('express');
const orderController = require('../controllers/myordersController');
const { requireAuth } = require('../middleware/authMiddleware');
const router = Router();

/**
 * @swagger
 * /accepted:
 *  get:
 *    tags: ['My orders']
 *    description: Get list of all accepted washers
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/accepted', requireAuth, orderController.get_accepted_orders);

/**
 * @swagger
 * /pending:
 *  get:
 *    tags: ['My orders']
 *    description: Get list of all pending washers
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/pending',requireAuth, orderController.get_pending_orders);

/**
 * @swagger
 * /inprocess:
 *  get:
 *    tags: ['My orders']
 *    description: Get list of all inprocess washers
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/inprocess',requireAuth, orderController.get_inprocess_orders);

/**
 * @swagger
 * /completedAndPaid:
 *  get:
 *    tags: ['My orders']
 *    description: Get list of all completed and paid washers
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/completedAndPaid',requireAuth, orderController.get_completed_paid_orders);

/**
 * @swagger
 * /completedAndUnpaid:
 *  get:
 *    tags: ['My orders']
 *    description: Get list of all completed but unpaid washers
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/completedAndUnpaid',requireAuth, orderController.get_completed_unpaid_orders);

/**
 * @swagger
 * /cancelled:
 *  get:
 *    tags: ['My orders']
 *    description: Get list of all cancelled washers
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/cancelled',requireAuth, orderController.get_cancelled_orders);


module.exports = router;
