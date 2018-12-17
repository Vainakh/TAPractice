let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let app = express();

let db = require('./controllers.js');

app.use(express.static(path.join(__dirname, './../client/dist')));
app.use(bodyParser.json());


app.post('/test', (req, res) => {
  console.log('this is db'. db);
  db.postData(req.body, (err) => {
    if (err) {
      console.log('error posting to mongo server')
    } else {
      res.status(201).send();
    }
  });
});

app.get('/test', (req, res) => {
  db.getData((err, data) => {
    console.log(data);
    console.log(typeof data);
    res.send(data)
  });

});

let PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log('error on server')
  } else {
    console.log(`success on server connection, listening on port ${PORT}`)
  }
});
