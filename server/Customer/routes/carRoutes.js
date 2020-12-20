const carController = require('../controllers/carController');
const {requireAuth} = require('../middleware/authMiddleware');
const {Router} = require('express');
const router = Router();


/**
 * @swagger
 * /cars:
 *  get:
 *    tags: ['cars']
 *    description: Get the list of active cars
 *    responses:
 *      '201':
 *        description: successfully get all cars
 *      '400' :
 *        description: Error occured
 */
router.get('/cars',   requireAuth ,  carController.get_cars);


module.exports = router;