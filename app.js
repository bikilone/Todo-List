var express = require("express");
var app = express();
var ToDo = require("./Models/toDo");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var router = require("./routes/todos");

mongoose.connect("mongodb://localhost/jsonApi");
mongoose.set("debug", true);
mongoose.Promise = Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile("index.html")
})

app.listen(3001, function() {
    console.log("Server is running on port 3001")
})