const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const db = require('./controllers.js');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../client/dist')));

app.post('/test', (req, res) => {
  console.log('app.post fires!');
  console.log('this is req.body', req.body);
  db.postData(req.body)
});

app.get('/text', (req, res) => {
  db.getData()
      .then((results) => {
        console.log('then in getData');
        res.send(results)
      }).catch(
          console.log('get data error')
  )
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
