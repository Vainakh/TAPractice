const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "test"
})

connection.connect((err)=> {
  if(err) {
    console.log('Error connection to database')
  } else {
    console.log('Successful connection to database')
  }
})

module.exports = connection;
