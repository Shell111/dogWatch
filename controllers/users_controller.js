const User = require('../models/user')

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('test')
  User  
    .countDogs()
    .then(dogs => res.json(dogs))
})

router.post('/', (req, res) => {
  User
    .createUser(
      req.body.name,
      req.body.email,
      req.body.password,
      req.body.dog_name,
      req.body.energy_level)
    .then(user => {
      res.json(user);
  });
})

module.exports = router;