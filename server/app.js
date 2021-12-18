const express = require('express');
const app = express();

<<<<<<< HEAD
const morgan = require('morgan');
=======
const morgan = require("morgan");
>>>>>>> d05f012 (fix: server/app.js)
const cors = require('cors');

app.use(morgan());
app.use(cors());
app.use(express.json());

const database = require('./config/database');

const routes = require('./routes');
app.use('/', routes);
<<<<<<< HEAD
=======

>>>>>>> d05f012 (fix: server/app.js)

module.exports = app;
