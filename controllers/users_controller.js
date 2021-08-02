const User = require('../models/user')

const express = require('express')

const axios = require('axios')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('test')
    User  
      .countDogs()
      .then(dogs => res.json(dogs))
  })

  module.exports = router;