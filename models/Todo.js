var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

module.exports = { TodoSchema };
