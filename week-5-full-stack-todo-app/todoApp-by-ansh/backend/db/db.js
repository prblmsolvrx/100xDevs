const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ansharora3839:g68W8vbEth9POW2M@cluster0.qrpua6t.mongodb.net/todo")


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'todo'
    }]
})

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    tag: String,
    completed: {
        type: Boolean,
        default: false
    }
})


const User = mongoose.model('user', userSchema)
const Todo = mongoose.model('todo', todoSchema)




module.exports = {
    User,
    Todo
}