const { Router } = require('express');
const bodyParser = require('body-parser');
const authController = require('../controller/authController');



var urlencodedParser = bodyParser.urlencoded({ extended: true });
const router = Router();

//Routes for signup
router.get('/signup', authController.get_signup);


router.post('/signup', urlencodedParser ,authController.post_signup);

//Routes for login
router.get('/login', authController.get_login);

/**
 * @swagger
 * /login:
 *  post:
 *    tags: ['auth']
 *    description: Login the admin
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.post('/login',urlencodedParser ,authController.post_login);

//Route for logout
router.get('/logout',authController.get_logout);


module.exports = router;