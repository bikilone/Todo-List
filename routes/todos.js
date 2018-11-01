var express = require("express");
var router = express.Router();
var ToDo = require("../Models/toDo");
var helpers = require("../helpers/todos");

// index list of todos

router.get("/api/todos", helpers.getTodos)

// create todo

router.post("/api/todos", helpers.postTodos)

// retrieve a todo

router.get("/api/todos/:id", helpers.retrieveTodo)

// update

router.put("/api/todos/:id/edit", helpers.updateTodo)

// delete 

router.delete("/api/todos/:id", helpers.deleteTodo)

module.exports = router;