const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');

app.use(morgan());
app.use(cors());
app.use(express.json());

const database = require('./config/database');

const routes = require('./routes');
app.use('/', routes);

module.exports = app;
