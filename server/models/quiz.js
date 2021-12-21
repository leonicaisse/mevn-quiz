const mongoose = require('mongoose');
const flat = require('flat');

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

quizSchema.statics.findByIdAndDeepUpdate = async function(id, data) {
  const flattenedData = flat(data);
  return await quizModel.findByIdAndUpdate(
      id, flattenedData, {returnDocument: 'after'},
  );
};

const quizModel = mongoose.model('Quiz', quizSchema);
module.exports = quizModel;
