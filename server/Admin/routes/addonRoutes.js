const { Router } = require('express');
const addonController = require('../controller/addonController');
const bodyParser = require('body-parser');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});


/**
 * @swagger
 * /addons:
 *  get:
 *    tags: ['Addons']
 *    description: Get list of all addons
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/addons', requireAuth, addonController.get_addons);

/**
 * @swagger
 * /addons/:id :
 *  get:
 *    tags: ['Addons']
 *    description: Get a specific addon by its id
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/addons/:id', requireAuth, addonController.get_addon);

/**
 * @swagger
 * /addons:
 *  post:
 *    tags: ['Addons']
 *    description: create a new addon
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.post('/addons', requireAuth, urlencodedparser,addonController.post_addons );

/**
 * @swagger
 * /addons/:id :
 *  put:
 *    tags: ['Addons']
 *    description: update a  addon
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.put('/addons/:id', requireAuth, urlencodedparser, addonController.put_addons);

/**
 * @swagger
 * /addons/:id :
 *  delete:
 *    tags: ['Addons']
 *    description: Delete an addon
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.delete('/addons/:id', requireAuth, addonController.delete_addons);


module.exports = router;