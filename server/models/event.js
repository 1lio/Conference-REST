require('../models/member');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Members = mongoose.model('member');

// Status number
// 0 - Запланировано
// 1 - идет
// 2 - перенесено
// 3 - отменено
// 4 - завершено

const EventSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    status: {
        type: Number,
        default: 0
    },
    time: {
        type: String,
        required: true,
        default: '00:00'
    },
    date: {
        type: Date,
        required: true,
        default: '01-10-2020'
    },
    platform: {
        type: String,
        default: 'skype'
    },
    members: {
        type: Array,
        default: [[Members]]
    },
    institute: {
        type: String,
        default: 'none'
    },
    description: {
        type: String
    },
    lifecycle: {
        type: Array,
        default: [0]
    },
    duration: {
        type: String,
        default: '00:00:00'
    },
    stars: {
        type: Number,
        default: 5
    }
});

module.exports = Event = mongoose.model('event', EventSchema);
