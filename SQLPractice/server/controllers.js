const db = require('./../db/');

const postData = (req, res) => {
  console.log("postData fires!");
  console.log('this req of postData', req);
  console.log('this is type of req', typeof req);

  let sqlCommand = `INSERT INTO test_table (text) VALUES('${req.text}')`;
  db.query(sqlCommand, (err, data) => {
    if (err) {
      console.log('ERROR SQL');
    } else {
      console.log("SUCCESS SQL");
      console.log('this is data in db.query', data);
    }
  })
};

const getData = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM test_table', (err, response) => {
      if (err) {
        reject(err)
      }
      resolve(response)
    })
  })
  // let sqlCommand = `SELECT * FROM test_table`;
  // db.query(sqlCommand, (err, data) => {
  //   if(err) {
  //     console.log('Error in get request')
  //   } else {
  //     res(data)
  //   }
  // })
};

module.exports = {
  postData,
  getData
};
