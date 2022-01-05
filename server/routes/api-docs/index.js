const routes = new (require('express')).Router();
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'MEVN-Quiz API',
      description: 'MEVN-Quiz API Documentation',
      servers: [`http://localhost:${process.env.port || 8000}`],
    },
  },
  apis: ['./routes/**/*.js', './routes/**/definitions.yaml'],
};

routes
    .use('/', swaggerUI.serve)
    .get('/', swaggerUI.setup(swaggerJsDoc(swaggerOptions)));

module.exports = routes;
