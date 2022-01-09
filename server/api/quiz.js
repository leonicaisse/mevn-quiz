const Quiz = require('../models/quiz');
const {mapPostData} = require('./quiz.utils');

const index = async () => {
  return await Quiz.find();
};

const create = async (data) => {
  const mappedData = mapPostData(data);
  const newQuiz = new Quiz(mappedData);
  return await newQuiz.save();
};

const read = async (id) => {
  return await Quiz.findById(id);
};

const update = async (id, data) => {
  return await Quiz.findByIdAndUpdate(id, data, {returnDocument: 'after'});
};

const remove = (id) => {
  return Quiz.findByIdAndRemove(id);
};

module.exports = {
  index,
  create,
  read,
  update,
  remove,
};
