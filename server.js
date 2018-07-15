var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('./utils/db').mongoose;
var Todo = require('./models/Todo');
var User = require('./models/User');

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed
  });
  
  todo.save().then(todo => {
    res.json(todo);
  }).catch(error => {
    res.status(400).json(error.errors);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
