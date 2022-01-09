const routes = new (require('express')).Router();
const quiz = require('../../api/quiz');

/**
 * @swagger
 * /quiz:
 *  get:
 *    summary: Retrieve all quizzes.
 *    description: Retrieve all quizzes.
 *    tags:
 *      - quizzes
 *    responses:
 *      200:
 *        description: All quizzes.
 *        schema:
 *          type: array
 *          items:
 *            $ref: "#/definitions/Quiz"
 *      500:
 *        description: An error has occured.
 */
routes.get('/', async (req, res, next) => {
  quiz.index()
      .then((response) => res.status(200).send(response))
      .catch((err) => next(err));
});

/**
 * @swagger
 * /quiz:
 *  post:
 *    summary: Create a new quiz
 *    parameters:
 *      - in: body
 *        name: Request Body
 *        description: "The data for the new quiz"
 *        schema:
 *          type: object
 *          properties:
 *            data:
 *              $ref: '#/definitions/Quiz'
 *        required: true
 *    tags:
 *      - quizzes
 *    responses:
 *      201:
 *        description: Quiz created
 *      500:
 *        description: An error has occured
 */
routes.post('/', async (req, res, next) => {
  const {data} = req.body;
  quiz.create(data)
      .then((response) => {
        res.status(201).send(response);
      })
      .catch((err) => next(err));
});

/**
 * @swagger
 * /quiz/{id}:
 *  get:
 *    summary: Get a quiz by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the quiz to get
 *    tags:
 *      - quizzes
 *    responses:
 *      200:
 *        description: Requested quiz
 *        schema:
 *          $ref: "#/definitions/Quiz"
 *      500:
 *        description: An error has occured
 */
routes.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  quiz.read(id)
      .then((response) => {
        if (!response) throw Object.assign(new Error('Not found'), {code: 404});
        res.status(200).send(response);
      })
      .catch((err) => next(err));
});

/**
 * @swagger
 * /quiz/{id}:
 *  put:
 *    summary: Update a quiz by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          example: "61cc741e2a17104ba34a45ae"
 *        required: true
 *        description: ID of the quiz to update
 *      - in: body
 *        name: Request Body
 *        required: true
 *        description: "The new data for the quiz"
 *        schema:
 *          type: object
 *          properties:
 *            data:
 *              $ref: "#/definitions/Quiz"
 *    tags:
 *      - quizzes
 *    responses:
 *      200:
 *        description: Quiz updated successfully
 *        schema:
 *          $ref: "#/definitions/Quiz"
 *      500:
 *        description: An error has occured
 */
routes.put('/:id', async (req, res, next) => {
  const {id} = req.params;
  const {data} = req.body;
  quiz.update(id, data)
      .then((response) => {
        if (!response) throw Object.assign(new Error('Not found'), {code: 404});
        res.status(200).send(response);
      })
      .catch((err) => next(err));
});

/**
 * @swagger
 * /quiz/{id}:
 *  delete:
 *    summary: Delete a quiz by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the quiz to delete
 *    tags:
 *      - quizzes
 *    responses:
 *      204:
 *        description: Quiz deleted
 *      500:
 *        description: An error has occured
 */
routes.delete('/:id', (req, res, next) => {
  const {id} = req.params;
  quiz.remove(id)
      .then((response) => {
        if (!response) throw Object.assign(new Error('Not found'), {code: 404});
        res.status(200).send(response);
      })
      .catch((err) => next(err));
});


module.exports = routes;
