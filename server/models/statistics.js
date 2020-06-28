const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const date = require('../utils/utils').getDate;

const StatisticsSchema = new Schema({

    date: {
        type: String,
        default: date
    },

    maxEventsAllTime: {
        type: Number,
        default: 0
    },

    maxEventsYear: {
        type: Number,
        default: 0
    },

    maxEventsMount: {
        type: Number,
        default: 0
    },

    maxEventsWeek: {
        type: Number,
        default: 0
    },

    maxEventsDay: {
        type: Number,
        default: 0
    },

    // MembersInEvent
    maxMembersInEvent: {
        type: Number,
        default: 0
    },

    countMembers: {
        type: Number,
        default: 0
    },

    membersTimeZone: {
        type: String,
        default: '+3'
    },

    // Перенесено событий
    replacedEvents: {
        type: Number,
        default: 0
    },

    canceledEvents: {
        type: Number,
        default: 0
    },

    platform: {
        type: String,
        default: "unused"
    },

    platformCount: {
        type: Number,
        default: 0
    },

    eventsMaxDuration: {
        type: String,
        default: '00:00:00'
    },

    eventsMinDuration: {
        type: String,
        default: '00:00:00'
    },

    eventsAverageDuration: {
        type: String,
        default: '00:00:00'
    },

    popularMember: {
        type: Object,
        default: {msg: 'non objects'}
    },

    maxEventsFromInstitute: {
        type: String,
        default: 'not events'
    },

    minEventsFromInstitute: {
        type: String,
        default: 'not events'
    },

    eventsAverageStars: {
        type: Number,
        default: 1,
        min: 1,
        max: 10
    }

});

module.exports = Member = mongoose.model('statistics', StatisticsSchema);
