const express = require('express')

// middlewares
const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/error_handler');

// controllers
const usersController = require('./controllers/users_controller.js');
const parksController = require('./controllers/parks_controller');

const app = express()
const port = 3000

// start the web server
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// app.use(logger)
// //    |
// //    V
// // (middleware) builtin mini router for static files
app.use(express.static('client'))
// //    |
// //    V
// // parse JSON Body to req.body
// app.use(express.json())
// //    |
// //    V
// // routes (middleware)

// app.use('/api/users', usersController);

// app.use('/api/parks', parksController);
// //    |
// //    V
// //--handle any errors that are thrown _anywhere_ in the stack of middlewares
// app.use(errorHandler);