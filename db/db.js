// visit node.postgres.com for more info
const pg = require('pg')

// not just creating a connection to db, its also creating a pool we can take data out of
const db = new pg.Pool({
  database: 'dogwatch',
  password: process.env.DB_PASSWORD
})

module.exports = db
