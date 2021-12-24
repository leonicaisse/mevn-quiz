const routes = new (require('express')).Router();
const quiz = require('../../api/quiz');

/**
 * @swagger
 * /quiz:
 *  get:
 *    summary: Get all quizzes list
 *    tags:
 *      - quizzes
 *    responses:
 *      200:
 *        description: All quizzes
 *      500:
 *        description: An error has occured
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
 *        type: object
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
 *        required: true
 *        description: ID of the quiz to update
 *    tags:
 *      - quizzes
 *    reponses:
 *      200:
 *        description: Quiz updated successfully
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
