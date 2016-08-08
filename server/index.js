var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://postgres:Voidray1@localhost/postgres';

var app = module.exports = express();
var massiveInstance = massive.connectSync({
  connectionString: connectionString
});

app.set('db', massiveInstance);
var db = app.get('db');

app.use(bodyParser.json());
app.use(cors());

app.post('/server/serverData', function(req, res, next) {
  res.status(200).send('made it');
  console.log('made it');
  console.log(req.body);
});

app.listen(4000, function() {
  console.log('listening on 4000');
});
