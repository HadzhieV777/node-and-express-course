const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    //   .next() passing to the next middleware in the stack
    next();
    //   Terminating the whole cycle with .send()
    //   res.send('Testing')
  };

  module.exports = logger