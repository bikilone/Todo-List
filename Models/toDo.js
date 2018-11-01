var mongoose = require("mongoose");

var toDoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name cannot be blank"
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("toDo", toDoSchema)