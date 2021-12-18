const mongoose = require('mongoose');
require('dotenv-flow').config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
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
