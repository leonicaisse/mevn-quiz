const routes = require('express').Router();

const homePage = (req, res, next) => {
  res.send('Home Page');
};

routes.get('/', homePage);


module.exports = routes;
