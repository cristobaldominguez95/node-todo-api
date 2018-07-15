var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

module.exports = mongoose.model('Todos', TodoSchema);
