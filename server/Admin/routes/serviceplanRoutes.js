const bodyParser = require('body-parser');
const { Router } = require('express');
const serviceplanController = require('../controller/serviceplanController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

var urlencodedParser = bodyParser.urlencoded({ extended: true });

/**
 * @swagger
 * /services :
 *  get:
 *    tags: ['Services']
 *    description: Get all services
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.get('/services',  requireAuth, serviceplanController.get_Services);

/**
 * @swagger
 * /services/{id} :
 *  get:
 *    tags: ['Services']
 *    description: Get a specific service
 *    parameters:
 *      - name: id
 *        description: id to search a service
 *        in: path
 *        type: string
 *        required: true
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.get('/services/:id', /* requireAuth, */ serviceplanController.get_Service);

/**
 * @swagger
 * /activeServices :
 *  get:
 *    tags: ['Services']
 *    description: Get active service
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.get('/activeServices', requireAuth, serviceplanController.get_Active_Services);

/**
 * @swagger
 * /activeCount :
 *  get:
 *    tags: ['Services']
 *    description: Get coun t of active services
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.get('/activeCount', requireAuth, serviceplanController.get_Count_Active_Services);

/**
 * @swagger
 * /services :
 *  post:
 *    tags: ['Services']
 *    description: create a new service
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.post('/services', requireAuth, urlencodedParser ,serviceplanController.post_Service);

/**
 * @swagger
 * /services/{id}:
 *  put:
 *    tags: ['Services']
 *    description: update a service
 *    parameters:
 *      - name: id
 *        description: id to updates a service
 *        in: path
 *        type: string
 *        required: true
 *      - name: reqBody
 *        description: update request body
 *        in: body
 *        schema: 
 *           type: object
 *           properties:
 *              name:
 *                  type: string
 *              time:
 *                  type: string
 *              cost:
 *                  type: number
 *              description:
 *                  type: string
 *           required: 
 *              - name
 *              - time
 *              - cost
 *              - description
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.put('/services/:id', requireAuth, urlencodedParser ,serviceplanController.put_Service);

/**
 * @swagger
 * /services/{id} :
 *  delete:
 *    tags: ['Services']
 *    description: Delete the service
 *    parameters:
 *      - name: id
 *        description: id to delete a service
 *        in: path
 *        type: string
 *        required: true
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400':
 *        description: Error occured
 */
router.delete('/services/:id',  requireAuth,  urlencodedParser ,serviceplanController.delete_Service);


module.exports = router;