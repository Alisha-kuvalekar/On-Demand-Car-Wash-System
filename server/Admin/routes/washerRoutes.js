const { Router } = require('express');
const { route } = require('./serviceplanRoutes');
const { requireAuth } = require('../middleware/authMiddleware');
const washerController = require('../controller/washerController');
const bodyParser = require('body-parser');


const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});


/**
 * @swagger
 * /washers:
 *  get:
 *    tags: ['Washers']
 *    description: get all washers
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.get('/washers', requireAuth, washerController.get_all_washers);

/**
 * @swagger
 * /washer:
 *  get:
 *    tags: ['Washers']
 *    description: get unapproved washers
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.get('/washer', requireAuth, washerController.get_washers);

/**
 * @swagger
 * /washer/:id :
 *  put:
 *    tags: ['Washers']
 *    description: update status of washer as approved
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.put('/washer/:id', requireAuth, urlencodedparser, washerController.update_washer);

/**
 * @swagger
 * /washer/:id :
 *  delete:
 *    tags: ['Washers']
 *    description: Delete/Reject a washer
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.delete('/washer/:id', requireAuth, washerController.delete_washer);

/**
 * @swagger
 * /countWashers :
 *  get:
 *    tags: ['Washers']
 *    description: get count of approved washers
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.get('/countWashers', requireAuth, washerController.count_washers);

module.exports = router;