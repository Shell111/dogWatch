const User = require('../models/user')

console.log('hello1')

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  // console.log('test')
  User
    .countDogs()
    .then(dogs => res.json(dogs))
})

router.get('/get-names', (req, res) => {
  // console.log('test')
  User
    .getNames()
    .then(names => res.json(names))
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

router.post('/select-park', (req, res) => {
  console.log(req.body)
  if (req.session.userId) {
    User
      .selectPark(req.body.parkId, req.session.userId)
      .then(park => res.json(park))
  }
})


module.exports = router;