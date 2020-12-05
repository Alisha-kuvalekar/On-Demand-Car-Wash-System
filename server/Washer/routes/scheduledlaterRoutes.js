const {requireAuth} = require('../middleware/authMiddleware');
const {Router} = require('express');
const controller = require('../controllers/scheduledlaterController');
const router = Router();

//get orders which are scheduled for later
router.get('/scheduledLater/:id', requireAuth , controller.get_scheduled_orders);


module.exports = router;