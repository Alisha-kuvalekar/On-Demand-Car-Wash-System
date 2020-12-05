const bodyParser = require('body-parser');
const profileController = require('../controllers/profileController');

const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');

const urlencodedParser = bodyParser.urlencoded({ extended: true})
const router = Router();


//Profile route handlers

//Get profile page
router.get('/profile',  requireAuth, profileController.get_profile);

//Create new profile of customer
router.post('/profile', requireAuth,  urlencodedParser, profileController.post_profile);

//Get individual customer's details
router.get('/profile/:id', requireAuth, urlencodedParser,profileController.get_specific_profile);

//Update customer's details
router.put('/profile/:id', requireAuth, urlencodedParser,profileController.update_profile);


module.exports = router;