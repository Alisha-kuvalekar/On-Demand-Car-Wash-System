const {requireAuth} = require('../middleware/authMiddleware');
const {Router} = require('express');
const controller = require('../controllers/scheduledLaterController');
const router = Router();

//get orders which are scheduled for later
router.get('/scheduledLater', requireAuth , controller.get_scheduled_orders);


module.exports = router;