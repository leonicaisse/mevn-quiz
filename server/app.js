const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');

const errorHandler = require('./utils/errorHandler');

app.use(morgan());
app.use(cors());
app.use(express.json());

require('./config/database');

const routes = require('./routes');
app.use('/', routes);

app.use(errorHandler);

module.exports = app;
