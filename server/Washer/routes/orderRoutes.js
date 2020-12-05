const { Router } = require('express');
const bodyparser = require('body-parser');
const orderController = require('../controllers/orderController');
const  { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedparser = bodyparser.urlencoded({extended: true});

//Get list of pending orders by washer's id
router.get('/requests/:washerId', requireAuth , orderController.get_orders);

//get one particular order by : order id
router.get('/orders/:orderId', requireAuth , orderController.get_order);

//Accepting orders by order id
router.put('/accept/:orderId', requireAuth ,urlencodedparser, orderController.accept_order);

//Rejecting orders by order id
router.put('/reject/:orderId', requireAuth , urlencodedparser, orderController.reject_order);

//Order in-proces by order id
router.put('/inprocess/:orderId', requireAuth , urlencodedparser, orderController.inprocess_order);

//Order completed by order id
router.put('/completed/:orderId', requireAuth ,urlencodedparser, orderController.completed_order);


module.exports = router;