const express = require('express')
// app.get and post is a router branch under the umbrella
const Park = require('../models/park')
// const validateTreasure = require('../middlewares/treasures/validate_treasure.js')
const axios = require('axios')

const router = express.Router()

// relating to the frontend initialize js - catching the call
// find all the treasures then take them and pass them on back to browser as JSON
router.get('/', (req, res) => {
  console.log('test')
  Park  
    .findAll()
    .then(parks => res.json(parks))
})

// will auto go to '/api/users'
router.post('/', (req, res) => {
  // get the data from the form
  const name = req.body.name
  const address = req.body.address
  console.log(name)

  axios
    .get(`http://dev.virtualearth.net/REST/v1/Locations?addressLine=${address}&key=${process.env.BING_MAPS_API_KEY}`)
    .then(response => response.data.resourceSets[0].resources[0].point.coordinates)
    .then(coordinates => {
      // destructuring could just get rid of the below const and write [lat, lng] int he then() instead of coordinates 
      const lat = coordinates[0]
      const lng = coordinates[1]

      // Park.createClue(name, address, lat, lng)
      // // returning the user whcih is returned in the dbResponse in user.js
      //   .then(treasures => { // variable "user" here is the ast thing returned from the promise chain in the 'user.createUser method
      //     res.json(treasures)
      //   })
    })
})

// // uses the id to find the delete route and passes to model
// router.delete('/:id', (req, res) => {
//   Treasure 
//     .delete(req.params.id)
//     .then(() => res.json({}))
// })

// connect router to applications
module.exports = router