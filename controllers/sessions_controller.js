// needs to create, delete, update and get sessions instead of on db
const User = require('../models/user')

const express = require('express')
const bcrypt = require('bcrypt')
const validateUser = require('../middlewares/users/validate_user')


const router = express.Router()


// login - create
router.post('/', validateUser.validateLoginUser, (req, res) => {

  // req.session.userId = 2
  // res.json(req.body.password)
  User.findByEmail(req.body.email)
    .then(user => {
      // console.log(user)
      // res.json(bcrypt.compareSync(req.body.password, user.password_digest))   -> returns false
      // check if user is defined and compare what the user has typed in to what is in the database
      if (user && bcrypt.compareSync(req.body.password, user.password_digest)) {
        req.session.userId = user.id
        res.json({ message: 'success' })
      } else {
        // error - user not found or wrong password
        res.status(400).json({ error: "Incorrect username or password" })
      }
    })
})

// send response back to user
router.get('/', (req, res) => {
  res.json(req.session) // returns all the information
})

// logout - delete
router.delete('/', (req, res) => {
  if (req.session.userId) {
    User
      .logout(req.session.userId)
      .then(() => {
        req.session.destroy() // remove/reset the session
        res.json({})
      })
  }
})

module.exports = router