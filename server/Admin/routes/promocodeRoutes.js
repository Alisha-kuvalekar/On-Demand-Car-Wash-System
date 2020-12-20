const { Router } = require('express');
const promocodeController = require('../controller/promocodeController');
const bodyParser = require('body-parser');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});



router.get('/promocodes',  requireAuth, promocodeController.get_promocodes);

//GET a specific promocode details
router.get('/promocodes/:id',  requireAuth, promocodeController.get_promocode);

//POST(create) new promocode
router.post('/promocodes', requireAuth, urlencodedparser, promocodeController.post_promocodes);

//PUT(update) a promocode's details
router.put('/promocodes/:id', requireAuth, urlencodedparser, promocodeController.put_promocode);

//DELETE a promocode
router.delete('/promocodes/:id',  requireAuth, promocodeController.delete_promocode);


module.exports = router;