const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const passport = require('passport');
const passportSetup = require('../services/passport-setup');
const authController = require('../controllers/authController');
const oauthController = require('../controllers/oauthController');
const { requireAuth } = require('../middleware/authMiddleware');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = Router();

//Creating JWT Token for google auth
const maxAge = 2 * 24 * 60 * 60;  //token will expire in 2 days
const createToken =(id)=>{
    return jwt.sign({ id }, 'A strong secret token',{
        expiresIn: maxAge
    })
}

//Routes for signup
router.get('/signup', authController.get_signup);

/**
 * @swagger
 * /signup:
 *  post:
 *    tags: ['auth']
 *    description: signup a new customer
 *    parameters:
 *          email :
 *              type :string
 *          password:
 *              type: string
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
 *    description: login the customer
 *    responses:
 *      '201':
 *        description: successfully get all cars
 *      '400' :
 *        description: Error occured
 */
router.post('/login',urlencodedParser ,authController.post_login);

//Route for logout
router.get('/logout',authController.get_logout);

//google auth routes
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

//callback route for google to redirect to 
router.get('/google/redirect',passport.authenticate('google') ,(req,res)=>{
    
})




module.exports = router;