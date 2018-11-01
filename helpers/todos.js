var ToDo = require("../Models/toDo");

exports.getTodos = function(req, res) {
    ToDo.find()
    .then(function(todos) {
        res.json(todos)
    })
    .catch(function() {
        res.send("error")
    })
}

exports.postTodos = function(req, res) {
    ToDo.create(req.body)
    .then(function(newTodo) {
        res.status(201).json(newTodo)
    })
    .catch(function(err) {
        res.send(err)
    })
};

exports.retrieveTodo = function(req, res) {
    ToDo.findById(req.params.id)
    .then(function(todo) {
        res.json(todo)
    })
    .catch(function(err) {
        res.send(err)
    })
}

exports.updateTodo = function(req, res) {
    var data = {
        completed: req.body.completed
    }
    ToDo.findByIdAndUpdate(req.params.id, data, {new:true})
    .then(function(todo) {
        res.json(todo)
    })
    .catch(function(err) {
        res.send(err)
    })
}

exports.deleteTodo = function(req, res) {
    ToDo.findByIdAndRemove(req.params.id)
    .then(function(deleted) {
        res.json(deleted)
    })
    .catch(function(err) {
        console.log(err)
    })
}