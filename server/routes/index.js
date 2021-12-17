const routes = require('express').Router();
const bodyParser = require('body-parser');

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

// require routes
const test = require('./test/test');
const pages = require('./pages/pages');

routes.use('/test', test);
routes.use('/pages', pages);

module.exports = routes;