const routes = require('express').Router();
const bodyParser = require('body-parser');

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

// require routes
const pages = require('./pages/pages');
const quiz = require('./quiz/quiz');


routes.use('/pages', pages);
routes.use('/quiz', quiz);

module.exports = routes;