function validationError(message) {
  const error = new Error(message)
  error.status = 422;
  return error;
}


const validateUser = {

  validateLoginUser(req, res, next) {
    const email = req.body.email
    const password = req.body.password

    // TO DO shoud probably be a 'isBlank(name) - create a method
    if (email === '' || email === undefined || email === null) {
      throw validationError("Email is required")
    }
    else if (password === '' || password === undefined || password === null) {
      throw validationError("Password is required")
    }

    next();
  },

  validateSignUpUser(req, res, next) {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const dogName = req.body.dog_name
    const energyLevel = req.body.energy_level

    // TO DO shoud probably be a 'isBlank(name) - create a method
    if (name === '' || name === undefined || name === null) {
      throw validationError("Name is required")
    }
    else if (email === '' || email === undefined || email === null) {
      throw validationError("Email is required")
    }
    else if (password === '' || password === undefined || password === null) {
      throw validationError("Password is required")
    }
    else if (password.length < 8) {
      throw validationError("Password must be at least 8 characters")
    }
    else if (dogName === '' || dogName === undefined || dogName === null) {
      throw validationError("Dog Name is required")
    }
    else if (energyLevel === '' || energyLevel === undefined || energyLevel === null) {
      throw validationError("Energy Level is required")
    }
    next();
  }
}

module.exports = { validateUser, validationError }
