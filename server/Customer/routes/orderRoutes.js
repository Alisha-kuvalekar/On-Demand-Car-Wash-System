const bodyParser = require('body-parser');
const ordercontroller = require('../controllers/orderController');
const { requireAuth } = require('../middleware/authMiddleware');
const { Router } = require('express');


const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});

//Get the booking page
router.get('/order', requireAuth, ordercontroller.get_order);

//Post a new order
router.post('/order', requireAuth, urlencodedparser, ordercontroller.create_order);

//to cancel the order: updating status to cancelled
router.put('/order/:id', requireAuth,urlencodedparser, ordercontroller.cancel_order);


module.exports = router;