const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  questions: [{
    name: String,
    correct_answer: String,
    answers: [{
      name: String,
    }],
  }],
});

module.exports = mongoose.model('Quiz', quizSchema);
