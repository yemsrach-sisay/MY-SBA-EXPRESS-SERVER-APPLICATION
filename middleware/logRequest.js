const logRequest = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${req.requestTime}`);
  next();
};

module.exports = logRequest;
