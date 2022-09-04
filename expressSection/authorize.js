const authorize = (req, res, next) => {
  console.log("Authorize");
  next();
};
// This is not the way we aouthorize osers in express

module.exports = authorize