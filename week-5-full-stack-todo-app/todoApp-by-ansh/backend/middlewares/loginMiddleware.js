const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')

function loginMiddleware(req, res, next) {
    const token = req.headers.authorization
    const isValid = jwt.verify(token, JWT_SECRET)
    if (!isValid) {
        res.status(403).json("You are not authorized")
        return
    }
    req.username = isValid.username
    next()
}

module.exports = {
    loginMiddleware
}