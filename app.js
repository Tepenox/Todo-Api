var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var todoRoutes = require("./routes/todos");

mongoose.connect('mongodb://localhost/todo-api');
mongoose.set('debug', true);
mongoose.Promise = Promise; //so we can use te promise syntax


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.send("hi from todos api");
})

app.use("/api/todos", todoRoutes);


app.listen(3000, function () {
    console.log("SERVER IS UP AND RUNNING");
})