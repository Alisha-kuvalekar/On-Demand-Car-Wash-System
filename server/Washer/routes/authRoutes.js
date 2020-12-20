const { Router } = require('express');
const bodyParser = require('body-parser');
const authController = require('../controllers/authController');


var urlencodedParser = bodyParser.urlencoded({ extended: false })
const router = Router();


//Routes for signup
router.get('/signup', authController.get_signup);

/**
 * @swagger
 * /signup:
 *  post:
 *    tags: ['auth']
 *    description: signup a new washer
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.post('/signup', urlencodedParser ,authController.post_signup);

//Routes for login
router.get('/login', authController.get_login);

/**
 * @swagger
 * /login:
 *  post:
 *    tags: ['auth']
 *    description: login the  washer
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.post('/login', urlencodedParser ,authController.post_login);

//Route for logout
router.get('/logout',authController.get_logout);


module.exports = router;