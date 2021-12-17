const express = require('express');
const app = express();

const morgan = require("morgan");
const cors = require('cors');

const routes = require('./routes');

app.use(morgan());
app.use(cors());
app.use(express.json());

app.use('/', routes);


module.exports = app;
