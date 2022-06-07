const express = require("express")
const appRouter = express.Router()
const userRoutes = require('./routes/user')
const pedidoRouter = require ('./routes/pedidos')

appRouter.use(express.json());

appRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token, x-user-role");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next();
})
appRouter.use('/pedido', pedidoRouter)
appRouter.use('/user', userRoutes)

// Not found
appRouter.use((req, res, next) => {
    const error = new Error('Route not found')
    error.status = 404
    next(error)
})

// handles all errors from other places that weren't treated
appRouter.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        code: error.status,
        msg: error.message
    })
})

module.exports = appRouter

