const bodyParser = require('body-parser');
const profileController = require('../controllers/profileController');

const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');

const urlencodedParser = bodyParser.urlencoded({ extended: true})
const router = Router();


//Get profile page
//router.get('/profile',  requireAuth, profileController.get_profile);

/**
 * @swagger
 * /profile:
 *  post:
 *    description: Create new profile
 *    tags : ['profile']
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.post('/profile', requireAuth,  urlencodedParser, profileController.post_profile);

/**
 * @swagger
 * /profile:
 *  get:
 *    tags : ['profile']
 *    description: get the profile details of a customer
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/profile', requireAuth, urlencodedParser,profileController.get_specific_profile);

/**
 * @swagger
 * /profile:
 *  put:
 *    tags : ['profile']
 *    description: update the profile details of the customer
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.put('/profile', requireAuth, urlencodedParser,profileController.update_profile);


module.exports = router;