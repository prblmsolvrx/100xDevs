const mongoose = require("mongoose");


// .env
mongoose.connect("mongodb+srv://prblmsolvrx:pMH6LF7dbWDns3SD@cluster0.ac2xcbr.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
