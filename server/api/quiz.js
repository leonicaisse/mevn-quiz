const Quiz = require('../models/quiz');
const {mapPostData} = require('./quiz.utils');

const index = async () => {
  try {
    return await Quiz.find();
  } catch (error) {
    throw error;
  }
};

const create = async (data) => {
  const mappedData = mapPostData(data);
  try {
    const newQuiz = new Quiz(mappedData);
    return await newQuiz.save();
  } catch (error) {
    throw error;
  }
};

const read = async (id) => {
  try {
    return await Quiz.findById(id);
  } catch (error) {
    throw error;
  }
};

const update = async (id, data) => {
  // TODO: Handle deep updates (i.e. question update)
  try {
    return await Quiz.findByIdAndUpdate(id, data, {returnDocument: 'after'});
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  try {
    return await Quiz.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  index,
  create,
  read,
  update,
  remove,
};
