var Todo = require('../models/todo');

exports.getTodos = function (req, res) {
    Todo.find()
        .then(function (todos) {
            res.json(todos); // simmilar to send but here just to be explisit
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.createTodo = function (req, res) {
    Todo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.getTodo = function (req, res) {
    Todo.finById(req.params.todoId)
        .then(function (foundTodo) {
            res.json(foundTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
}


exports.updateTodo = function (req, res) {
    Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true }) //without new true   this function will return the old value not the new one (the value after we updated it)
        .then(function (todo) {
            res.json(todo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.deleteTodo = function (req, res) {
    Todo.remove({ _id: req.params.todoId })
        .then(function () {
            res.json({ message: 'We deleted it!' });
        })
        .catch(function (err) {
            res.send(err);
        })
}

module.exports = exports;