const { Router } = require('express')
const router = Router()
const { User } = require("../db/db")
const { JWT_SECRET } = require('../config')
const jwt = require('jsonwebtoken')
router.post('/signup', async (req, res) => {
    const userInput = req.body
    const userExist = await User.findOne({
        username: userInput.username
    })
    if (userExist) {
        res.status(409).json({ msg: "User exist,choose different username" })
        return
    }
    await User.create({
        username: userInput.username,
        password: userInput.password
    })
    res.json({ msg: "Account Created" })
    return
})
router.post("/login", async (req, res) => {
    const userInput = req.body
    const signedUser = await User.findOne({
        username: userInput.username,
        password: userInput.password
    })
    if (!signedUser) {
        res.status(404).json({ msg: "User does not exist, please signup first" })
        return
    }
    const token = jwt.sign({
        username: userInput.username
    }, JWT_SECRET)
    res.json({ token })
})

module.exports = {
    authRoutes: router
}