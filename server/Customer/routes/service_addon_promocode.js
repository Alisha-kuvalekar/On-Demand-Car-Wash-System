const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');

const controller = require('../controllers/service_addon_promocode');
const router = Router();

//Get the list of all active services for listing in UI
router.get('/serviceplans', controller.get_ui_services);

//Get the list of all active services for customer booking
router.get('/services',requireAuth, controller.get_services);

//get all active addons by service name
router.get('/addons/:service',requireAuth, controller.get_addons);

//get active promocodes by service name
router.get('/promocodes/:service',requireAuth, controller.get_promocodes);


module.exports= router;