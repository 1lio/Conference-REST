const config = require('../config/config')
const bodyParser = require('body-parser')
const routes = require('../routes/index')
const cors = require('cors')

// Configure express from this file

const configureExpress = (app) => {

    let host = `http://${config.host}:${config.clientPort}`
    app.use(cors({origin: host}))

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', host)
        res.header('Access-Control-Allow-Credentials', true)
        next()
    })

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/api/', routes)
}

module.exports = {configureExpress}
