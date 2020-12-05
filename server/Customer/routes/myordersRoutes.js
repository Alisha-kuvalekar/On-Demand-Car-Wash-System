const {Router} = require('express');
const orderController = require('../controllers/myordersController');
const { requireAuth } = require('../middleware/authMiddleware');
const router = Router();

//Get list of all accepted orders by customer id
router.get('/accepted/:id', requireAuth, orderController.get_accepted_orders);

//Get list of all pending orders by customer id
router.get('/pending/:id',requireAuth, orderController.get_pending_orders);

//Get list of all in-process orders by customer id
router.get('/inprocess/:id',requireAuth, orderController.get_inprocess_orders);

//Get list of all completed orders by customer id
router.get('/completed/:id',requireAuth, orderController.get_completed_orders);

//get list of all cancelled orders by customer id
router.get('/cancelled/:id',requireAuth, orderController.get_cancelled_orders);


module.exports = router;