module.exports = (err, req, res, next) => {
  res.status(err.code || 500).send(err.message || 'Something went wrong');
  next();
};
