const { Router } = require('express');
const addonController = require('../controller/addonController');
const bodyParser = require('body-parser');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});


//GET all promocodes details
router.get('/addons', requireAuth, addonController.get_addons);

//GET a specific promocode details
router.get('/addons/:id', requireAuth, addonController.get_addon);

//POST(create) new promocode
router.post('/addons', requireAuth, urlencodedparser,addonController.post_addons );

//PUT(update) a promocode's details
router.put('/addons/:id', requireAuth, urlencodedparser, addonController.put_addons);

//DELETE a promocode
router.delete('/addons/:id', requireAuth, addonController.delete_addons);


module.exports = router;