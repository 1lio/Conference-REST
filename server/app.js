const config = require('./config/config')
const fakeData = require('./utils/dbutils')

const express = require('express')
const socketIO = require('socket.io')
const app = express()
const http = require('http')

const server = http.createServer(app)
const socket = socketIO.listen(server)

const io = require('./config/sockets')
const db = require('./config/db')
const exp = require('./config/express')

exp.configureExpress(app)
io.connectSocket(socket)
db.connectDB()

server.listen(config.port, () => console.log(`Server started http://${config.host}:${config.port}/api/info`))

//fakeData.generateEvents('10', 1)