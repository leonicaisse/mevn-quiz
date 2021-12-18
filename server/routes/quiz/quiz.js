const routes = new (require('express')).Router();
const quiz = require('../../api/quiz');

routes.get('/', async (req, res) => {
  try {
    res.status(200).send(await quiz.index());
  } catch (error) {
    res.status(500).send(error);
  }
});

routes.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    res.status(200).send(await quiz.read(id));
  } catch (error) {
    res.status(500).send(error);
  }
});

routes.post('/', async (req, res) => {
  const {data} = req.body;
  try {
    res.status(201).send(await quiz.create(data));
  } catch (error) {
    res.status(500).send(error);
  }
});

routes.patch('/:id', async (req, res) => {
  // TODO: Handle deep updates (i.e. question update)
  const {id} = req.params;
  const {data} = req.body;
  try {
    res.status(200).send(await quiz.update(id, data));
  } catch (error) {
    res.status(500).send(error);
  }
});

routes.delete('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    res.status(204).send(await quiz.remove(id));
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = routes;
