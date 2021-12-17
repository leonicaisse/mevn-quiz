const express = require('express');
const app = express();

<<<<<<< HEAD
const morgan = require("morgan");
=======
require('dotenv-flow').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
>>>>>>> develop
const cors = require('cors');

const routes = require('./routes');

app.use(morgan());
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
app.use('/', routes);
=======
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


const testRouter = require('./routes/test');
app.use('/test', testRouter);

const pages = require('./routes/pages');
app.use('/pages', pages);
>>>>>>> develop

module.exports = app;
