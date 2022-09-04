const authorize = (req, res, next) => {
  const {user} = req.query;

  if(user === 'john') {
    req.user = {name: 'john', id: 3}
    next()
  } else {
    res.status(401).send('Unauthorized!')
  }
};
// This is not the way we aouthorize osers in express
// IRL we will check if token exist
module.exports = authorize