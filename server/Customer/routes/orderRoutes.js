const bodyParser = require('body-parser');
const ordercontroller = require('../controllers/orderController');
const { requireAuth } = require('../middleware/authMiddleware');
const { Router } = require('express');


const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});

//Get the booking page
router.get('/order', requireAuth, ordercontroller.get_order);


/**
 * @swagger
 * /order:
 *  post:
 *    tags: ['orders']
 *    description: book a new order
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.post('/order', requireAuth, urlencodedparser, ordercontroller.create_order);

/**
 * @swagger
 * /order:
 *  put:
 *    tags: ['orders']
 *    description: cancel the order by id
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.put('/order/:id', requireAuth,urlencodedparser, ordercontroller.cancel_order);

/**
 * @swagger
 * /orderPayment:
 *  put:
 *    tags: ['orders']
 *    description: Change the payment status to done by the order id
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.put('/orderPayment/:id', requireAuth, urlencodedparser, ordercontroller.orderPaymentFulfilled);

/**
 * @swagger
 * /washcount:
 *  put:
 *    tags: ['orders']
 *    description: Increase the wash count for the customer
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.put('/washcount', requireAuth, urlencodedparser, ordercontroller.increaseWashCount)

module.exports = router;