const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MemberSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    skype: {
        type: String
    },
    phone: {
        type: String
    },
    mail: {
        type: String
    },
    timeZone: {
        type: String,
        default: "+3"
    },
    assistant: {
        type: String
    }
})

module.exports = Member = mongoose.model('member', MemberSchema)
