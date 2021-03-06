const routes = new (require('express')).Router();
const bodyParser = require('body-parser');

routes.use(bodyParser.urlencoded({extended: true}));
routes.use(bodyParser.json());

// require routes
const apiDocs = require('./api-docs');
const pages = require('./pages/pages');
const quiz = require('./quiz/quiz');

routes.use('/api-docs', apiDocs);
routes.use('/pages', pages);
routes.use('/quiz', quiz);

module.exports = routes;
