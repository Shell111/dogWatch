function validationError(message){
  const error = new Error(message)
  error.status = 422;
  return error;
}

function validateUser(req, res, next){
  const name = req.body.name 
  const email = req.body.email
  const password = req.body.password

  // throw new Error("message there")

  // TO DO shoud probably be a 'isBlank(name) - create a method
  if(name === '' || name === undefined || name === null) {
    throw validationError("Name is required")
  }
  else if(email === '' || email === undefined || email === null){
    throw validationError("Email is required")
  }
  else if(password === '' || password === undefined || password === null){
    throw validationError("Password is required")
  }
  else if (password.length < 8){
    throw validationError("Password must be at least 8 characters")
  }
  next();
}

module.exports = validateUser