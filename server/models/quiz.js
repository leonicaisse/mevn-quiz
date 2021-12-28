const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  questions: [{
    name: String,
    correct_answers: [{
      name: String,
    }],
    wrong_answers: [{
      name: String,
    }],
  }],
});

const quizModel = mongoose.model('Quiz', quizSchema);
module.exports = quizModel;
