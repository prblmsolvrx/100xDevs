const { Router } = require('express')
const router = Router()
const { todoSchema, updatedTodoSchema } = require('./validations/todoValidate')
const { User, Todo } = require('../db/db')
const jwt = require('jsonwebtoken')
const { loginMiddleware } = require('../middlewares/loginMiddleware')
const { userExistMiddleware } = require('../middlewares/userMiddleware')
router.post('/newtodo', loginMiddleware, userExistMiddleware, async (req, res) => {
    const userInput = req.body
    const isValid = todoSchema.safeParse(userInput)
    if (!isValid.success) {
        res.status(411).json({ msg: "Please provid valid inputs" })
        return
    }
    const todo = await Todo.create({
        title: userInput.title,
        description: userInput.description,
        tag: userInput.tag

    })
    await User.updateOne(
        { username: req.username },
        {
            "$push": {
                todos: todo._id
            }
        }
    )
    res.json({ id: todo._id })
})
router.get('/mytodos', loginMiddleware, userExistMiddleware, async (req, res) => {
    const user = req.user
    const todos = await Todo.find({
        _id: {
            "$in": user.todos
        }
    })
    res.json({ todos })
})
router.put("/updatetodo/:todoid", loginMiddleware, userExistMiddleware, async (req, res) => {
    const todoId = req.params.todoid
    const todoExist = Todo.findOne({
        _id: todoId
    })
    if (!todoExist) {
        res.json({ msg: 'This todo doesnt exist' })
        return
    }
    const userInput = req.body
    const validInput = updatedTodoSchema.safeParse(userInput)
    if (!validInput.success) {
        res.json({ msg: "Invalid Input" })
        return
    }
    const updateObject = {
        $set: {
        }
    }
    // TODO: Throw error if empty obj provided
    if (userInput.tag !== undefined) {
        updateObject.$set.tag = userInput.tag
    }
    if (userInput.title !== undefined) {
        updateObject.$set.title = userInput.title;
    }
    if (userInput.description !== undefined) {
        updateObject.$set.description = userInput.description;
    }
    if (userInput.completed != undefined) {
        updateObject.$set.completed = userInput.completed
    }
    try {
        var updatedTodo = await Todo.updateOne(
            { _id: todoId },
            updateObject
        )
    } catch (error) {
        console.log(error)
    }

    res.json({ msg: "Updated", updatedTodo })
})
router.delete("/deletetodo/:todoid", loginMiddleware, userExistMiddleware, async (req, res) => {
    const todoId = req.params.todoid
    const todo = Todo.findOne({
        _id: todoId
    })
    if (!todo) {
        res.json({ msg: 'This todo doesnt exist' })
    }
    await Todo.deleteOne(
        { _id: todoId }
    )
    await User.updateOne(
        { username: req.username },
        {
            "$pull": {
                todos: todoId
            }
        }
    )
    res.json({ msg: "Todo deleted" })

})

module.exports = {
    todoRoutes: router
}