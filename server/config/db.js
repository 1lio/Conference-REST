const config = require('./config')
const mongoose = require('mongoose')
const utils = require('../utils/utils')

// Configure db from this file

// Connection and configure db this function
const connectDB = () => {
    mongoose.connect(`mongodb://${config.dbHost}/${config.dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log(`Mongodb started http://${config.dbHost}:${config.dbPort}`))
        .catch(e => console.log('Mongodb error \n' + e))
}

// Utils method for db

// clears data, but not statistics
const clearDB = () => utils.clearDB()
const clearStatistics = () => utils.clearStatistics()

// Generate data
const generateFakeEvents = (count, status) => utils.generateFakeEvents(count, status)
const generateFakeMembers = (count) => utils.generateFakeMembers(count)

// Data capture from db
const captureStatistics = () => utils.captureStatistics()

module.exports = {connectDB, clearDB, clearStatistics, generateFakeEvents, generateFakeMembers, captureStatistics}
