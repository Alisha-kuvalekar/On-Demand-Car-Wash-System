const { Router } = require('express');
const carController = require('../controller/carController');
const bodyParser = require('body-parser');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});

/**
 * @swagger
 * /cars:
 *  get:
 *    tags: ['cars']
 *    description: Get all cars
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/cars', requireAuth, carController.get_cars);

/**
 * @swagger
 * /cars/:id :
 *  get:
 *    tags: ['cars']
 *    description: Get a specific car by id
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/cars/:id',requireAuth, carController.get_car);

/**
 * @swagger
 * /cars:
 *  post:
 *    tags: ['cars']
 *    description: create a new car 
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.post('/cars',requireAuth, urlencodedparser,carController.post_cars);

/**
 * @swagger
 * /cars/:id :
 *  put:
 *    tags: ['cars']
 *    description: update a car by its id
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.put('/cars/:id',requireAuth, urlencodedparser,carController.put_cars);

/**
 * @swagger
 * /cars:
 *  delete:
 *    tags: ['cars']
 *    description: delete a car by its id
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.delete('/cars/:id',requireAuth, carController.delete_cars);


module.exports = router;