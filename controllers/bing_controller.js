// API KEYS should be in your ENV
// ON HEROKU, you would set this as an environment variable
// Locally, we used that development thing called dotenv
const express = require('express')
const router = express.Router()
const BING_MAPS_KEY = process.env.BING_MAPS_API_KEY

// use express not app
router.get('/', (req, res) => {
  res.json(BING_MAPS_KEY)
  // + add whatever the front end sent via req.params
})

// tell Bing maps api to only run it when requested on server - only allow requests from .heroku.app  -> log into bing maps and security thing is there

module.exports = router