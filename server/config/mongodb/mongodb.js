const mongoose = require('mongoose');
require('dotenv-flow').config();

const {
  DATABASE_URL,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
} = process.env;

const MONGODB_URL =`mongodb+srv://${DATABASE_USERNAME}:${encodeURIComponent(DATABASE_PASSWORD)}@${DATABASE_URL}/${DATABASE_NAME}?retryWrites=true&w=majority`;

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
    });
    console.log('MongoDB connected!!');
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
  }
};

module.exports = {
  connect,
};
