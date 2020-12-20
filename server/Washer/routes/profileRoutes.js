const { Router } = require('express');
const bodyParser = require('body-parser');
const profileController = require('../controllers/profileController');
const { requireAuth } = require('../middleware/authMiddleware');
//const profileMiddleware = require('../middleware/profileMiddleware');

const router = Router();
const urlencodedParser = bodyParser.urlencoded({extended:true});

//Profile route handlers

//Get profile page
//router.get('/profile', requireAuth, profileController.get_profile);

/**
 * @swagger
 * /profile:
 *  post:
 *    tags: ['Profile']
 *    description: create a new profile
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.post('/profile', requireAuth, urlencodedParser, profileController.post_profile);

/**
 * @swagger
 * /profile:
 *  get:
 *    tags: ['Profile']
 *    description: get a specific washers profile
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/profile',requireAuth, urlencodedParser,profileController.get_specific_profile);

/**
 * @swagger
 * /profile:
 *  put:
 *    tags: ['Profile']
 *    description: update the profile
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.put('/profile',requireAuth, urlencodedParser,profileController.update_profile);


module.exports = router;