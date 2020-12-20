const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');

const controller = require('../controllers/service_addon_promocode');
const router = Router();

/**
 * @swagger
 * /serviceplans:
 *  get:
 *    tags: ['data']
 *    description: get the list of plans
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/serviceplans', controller.get_ui_services);

/**
 * @swagger
 * /services:
 *  get:
 *    tags: ['data']
 *    description: get the list of plans
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/services',requireAuth, controller.get_services);

/**
 * @swagger
 * /addons/:services : 
 *  get:
 *    tags: ['data']
 *    description: get the list of addons by plan name
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/addons/:service',requireAuth, controller.get_addons);

/**
 * @swagger
 * /promocodes/:services : 
 *  get:
 *    tags: ['data']
 *    description: get the list of promocodes by plan name
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get('/promocodes/:service',requireAuth, controller.get_promocodes);


module.exports= router;