// command click on the link (e.h. ../db/db) will open the file - following link
const db = require('../db/db')
const bcrypt = require('bcrypt')

const User = {
  // creating another function inside the object
  // collect all data and query the database using that sql command and then that allows us to access all the records inside the PSQL table -> all the treasures
  countDogs() {
    const sql = `
      SELECT users.park_id, COUNT(*), parks.id
      FROM users
      INNER JOIN parks
      ON users.park_id = parks.id
      GROUP BY users.park_id, parks.id;
    `

    console.log('sql')
    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  createUser(name, email, password, dog_name, energy_level) {
    // use hashing to create the password_digest
    const password_digest = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

    // put it into the table created
    const sql = `
      INSERT INTO users(name, email, password_digest, dog_name, energy_level)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
    `

    return db.query(sql, [name, email, password_digest, dog_name, energy_level])
      .then(dbResponse => {
        // this will return just the user we want -> promise chaining
        return dbResponse.rows[0]
      })
  },

  findByEmail(email) {
    const sql = `SELECT * FROM users
      WHERE email = $1;`

    return db.query(sql, [email])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  },

  selectPark(park, id) {
    const sql = `UPDATE users
    SET park_id = $1 
    WHERE id = $2;
    `

    return db.query(sql, [park, id])
      .then(dbResponse => {
        // this will return just the user we want -> promise chaining
        return dbResponse.rows[0]
      })
  },







  // model file takes info from controller and implements it in the backend the returns back to user
  // delete(id) {
  //   const sql = `
  //   DELETE park_id FROM users WHERE id = $1
  //   `
  //   return db.query(sql, [id])
  // }
}



module.exports = User
