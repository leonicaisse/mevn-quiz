require('dotenv-flow').config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(morgan());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


const testRouter = require('./routes/test');
app.use('/test', testRouter);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

