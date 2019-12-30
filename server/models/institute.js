const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Institute = new Schema({
    name: {type: String, required: true}
})

module.exports = Member = mongoose.model('institute', Institute)
