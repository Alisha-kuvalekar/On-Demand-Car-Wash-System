const bodyParser = require('body-parser');
const { Router } = require('express');
const serviceplanController = require('../controller/serviceplanController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

var urlencodedParser = bodyParser.urlencoded({ extended: true });

//get all Services
router.get('/services',  requireAuth, serviceplanController.get_Services);

//get one service
router.get('/services/:id', requireAuth, serviceplanController.get_Service);

//get all active services from database
router.get('/activeServices', requireAuth, serviceplanController.get_Active_Services);

//create a service
router.post('/services', requireAuth, urlencodedParser ,serviceplanController.post_Service);

//update a sevice
router.put('/services/:id', requireAuth, urlencodedParser ,serviceplanController.put_Service);

//delete a service
router.delete('/services/:id', requireAuth, urlencodedParser ,serviceplanController.delete_Service);


module.exports = router;