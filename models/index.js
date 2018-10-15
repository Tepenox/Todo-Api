var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise; //so we can use te promise syntax



module.exports.Todo = require("./todo");