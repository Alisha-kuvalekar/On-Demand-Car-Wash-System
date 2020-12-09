const { Router } = require('express');
const bodyParser = require('body-parser');
const authController = require('../controllers/authController');
const oauthController = require('../controllers/oauthController');
const { requireAuth } = require('../middleware/authMiddleware');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = Router();


//Routes for signup
router.get('/signup', authController.get_signup);
router.post('/signup', urlencodedParser ,authController.post_signup);

//Routes for login
router.get('/login', authController.get_login);
router.post('/login',urlencodedParser ,authController.post_login);

//Route for logout
router.get('/logout',authController.get_logout);

//google auth routes
router.get('/google', oauthController.get_google)




module.exports = router;