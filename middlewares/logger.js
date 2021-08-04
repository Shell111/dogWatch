// middleware for logging requests
function logger(req, res, next) {
    console.log(`${new Date()} ${req.method} ${req.path}`)
  
    // this calls the next function in middleware to run
    next()
  }
  
  module.exports = logger