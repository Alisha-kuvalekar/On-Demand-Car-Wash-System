const {Router} = require('express');
const orderController = require('../controllers/myordersController');
const { requireAuth } = require('../middleware/authMiddleware');
const router = Router();

//Get list of all accepted orders by washer id
router.get('/accepted', requireAuth, orderController.get_accepted_orders);

//Get list of all pending orders by washer id
router.get('/pending',requireAuth, orderController.get_pending_orders);

//Get list of all in-process orders by washer id
router.get('/inprocess',requireAuth, orderController.get_inprocess_orders);

//Get list of all completed and paid orders by washer id
router.get('/completedAndPaid',requireAuth, orderController.get_completed_paid_orders);

//Get list of all completed and paid orders by washer id
router.get('/completedAndUnpaid',requireAuth, orderController.get_completed_unpaid_orders);

//get list of all cancelled orders by washer id
router.get('/cancelled',requireAuth, orderController.get_cancelled_orders);


module.exports = router;
