// command click on the link (e.h. ../db/db) will open the file - following link
const db = require('../db/db')

const Park = {
  // creating another function inside the object
  // collect all data and query the database using that sql command and then that allows us to access all the records inside the PSQL table -> all the treasures
  findAll() {
    const sql = 'SELECT * FROM parks;'
    console.log('sql')
    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  // model file takes info from controller and implements it in the backend the returns back to user
  // delete() {
  //   const sql = `
  //   DELETE FROM treasures WHERE id = $1
  //   `
  //   return db.query(sql, [id])
  // }
}

module.exports = Park
  