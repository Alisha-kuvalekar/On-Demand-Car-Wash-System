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

//create washer's profile
router.post('/profile', requireAuth, urlencodedParser, profileController.post_profile);

//Get individual washer's profile details
router.get('/profile',requireAuth, urlencodedParser,profileController.get_specific_profile);

//update washer's profile
router.put('/profile',requireAuth, urlencodedParser,profileController.update_profile);


module.exports = router;