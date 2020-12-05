const { Router } = require('express');
const { route } = require('./serviceplanRoutes');
const { requireAuth } = require('../middleware/authMiddleware');
const washerController = require('../controller/washerController');
const bodyParser = require('body-parser');


const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});


//get all washers details
router.get('/washers', requireAuth, washerController.get_all_washers);

//get washers with approved status as false
router.get('/washer', requireAuth, washerController.get_washers);

//Accept(update) washer
router.put('/washer/:id', requireAuth, urlencodedparser, washerController.update_washer);

//Reject(delete) washer
router.delete('/washer/:id', requireAuth, washerController.delete_washer);

module.exports = router;