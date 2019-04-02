const mysql = require('mysql');
const config = require('./config.js');
const connection = mysql.createConnection(config);


const insertUser  = (username) => {
  return new Promise((resolve, reject) => {
    let sql = 'INSERT INTO users (username) VALUES (?)';
    connection.query(sql, username, (err, result) => {
      if (err) { reject(err) }
      resolve(result);
    })
  })
}

const insertReview = (date, review, rating, book_id, user_id) => {
  return new Promise((resolve, reject) => {
    let sql = 'insert into reviews (date, review, rating, book_id, user_id) values (?, ?, ?, ?, ?)';
    let params = [date, review, rating, book_id, user_id];
    connection.query(sql, params, (err, result) => {
      if (err) { reject(err) }
      resolve(result);
    })
  })
}

const getReviews = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'select * from reviews where id = ?';
    connection.query(sql, id, (err, result) => {
      if (err) { reject (err) }
      resolve(result);
    })
  })
}


const getRatedReviews = (id, rating) => {
  return new Promise((resolve, reject) => {
    const sql = 'select * from reviews where (id = ?, rating = ?)';
    let params = [id, rating];
    connection.query(sql, params, (err, result) => {
      if (err) { reject (err) }
      resolve(result);
    });
  })
}

<<<<<<< HEAD
=======
seedUsers()
.then(() => {
  let queryString = 'select count(*) as count from users';
  connection.query(queryString, (err, result) => {
    if (err){console.log(err)}
    if (result[0].count >= 100) {
      connection.end();
    }
  });
})
>>>>>>> DB

const postReview = (id, review, rating) => {
  return new Promise((resolve, reject) => {
    const sql = 'insert into reviews (review, rating) values (?, ?) where id = ?';
    const params = [id, review, rating];
    connection.query(sql, params, (err, result) => {
      if (err) { reject (err) }
      resolve(result);
    })
  })
}

<<<<<<< HEAD
=======
// connection.connect((err) => {
//   if (err) {
//     console.log(err, 'ERROR')
//   }
//   console.log('connected')
// })
>>>>>>> DB

module.exports = {
  insertUser,
  insertReview,
  getReviews,
  getRatedReviews,
  postReview
}