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
routes.get('/', async (req, res) => {
  try {
    res.status(200).send(await quiz.index());
  } catch (error) {
    res.status(500).send(error);
  }
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
routes.post('/', async (req, res) => {
  const {data} = req.body;
  try {
    res.status(201).send(await quiz.create(data));
  } catch (error) {
    res.status(500).send(error);
  }
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
routes.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    res.status(200).send(await quiz.read(id));
  } catch (error) {
    res.status(500).send(error);
  }
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
routes.put('/:id', async (req, res) => {
  const {id} = req.params;
  const {data} = req.body;
  try {
    res.status(200).send(await quiz.update(id, data));
  } catch (error) {
    res.status(500).send(error);
  }
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
routes.delete('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    res.status(204).send(await quiz.remove(id));
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = routes;
