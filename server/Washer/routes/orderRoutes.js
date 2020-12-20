const { Router } = require('express');
const bodyparser = require('body-parser');
const orderController = require('../controllers/orderController');
const  { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedparser = bodyparser.urlencoded({extended: true});

/**
 * @swagger
 * /requests:
 *  get:
 *    tags: ['Orders']
 *    description: Get list of all pending requests
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/requests', requireAuth , orderController.get_orders);

/**
 * @swagger
 * /orders/:orderId :
 *  get:
 *    tags: ['Orders']
 *    description: Get a specific order by its id
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/orders/:orderId', requireAuth , orderController.get_order);

/**
 * @swagger
 * /accept/:orderId :
 *  put:
 *    tags: ['Orders']
 *    description: change order status to accepted
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.put('/accept/:orderId', requireAuth ,urlencodedparser, orderController.accept_order);

/**
 * @swagger
 * /reject/:orderId :
 *  put:
 *    tags: ['Orders']
 *    description: change order status to cancelled
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.put('/reject/:orderId', requireAuth , urlencodedparser, orderController.reject_order);

/**
 * @swagger
 * /inprocess/:orderId :
 *  put:
 *    tags: ['Orders']
 *    description: change order status to inprocess
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.put('/inprocess/:orderId', requireAuth , urlencodedparser, orderController.inprocess_order);

/**
 * @swagger
 * /completed/:orderId :
 *  put:
 *    tags: ['Orders']
 *    description: change order status to completed
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.put('/completed/:orderId', requireAuth ,urlencodedparser, orderController.completed_order);


module.exports = router;