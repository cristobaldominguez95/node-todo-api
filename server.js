var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('./utils/db').mongoose;
var Todo = require('./models/Todo');
var User = require('./models/User');

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
