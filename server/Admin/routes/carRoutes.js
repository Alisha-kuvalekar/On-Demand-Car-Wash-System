const { Router } = require('express');
const carController = require('../controller/carController');
const bodyParser = require('body-parser');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});

//get all cars
router.get('/cars', requireAuth, carController.get_cars);

//get one specific car
router.get('/cars/:id',requireAuth, carController.get_car);

//create new car 
router.post('/cars',requireAuth, urlencodedparser,carController.post_cars);

//update a car's details
router.put('/cars/:id',requireAuth, urlencodedparser,carController.put_cars);

//delete a car
router.delete('/cars/:id',requireAuth, carController.delete_cars);


module.exports = router;