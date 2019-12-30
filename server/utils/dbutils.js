const mongoose = require('mongoose')

require('../models/event')
require('../models/member')
require('../models/statistics')

const EventsService = require('../services/evets.service')
const MembersService = require('../services/members.service')

const Event = mongoose.model('event')
const Member = mongoose.model('member')
const Statistics = mongoose.model('statistics')

let currentDate = require('../utils/utils').getDate
let currentTime = require('../utils/utils').getTime

const defaultMember = {
    name: 'ЕГУ им. И.А.Бунина',
    icon: "uploads/default/egu-logo.png",
    skype: "eletsegu",
    phone: `+7(920)536-74-56`,
    mail: "it@elsu.ru",
    timeZone: "+3",
    assistant: 'Вячеслав Сухов'
}

class DBUtils {

    // clears models
    clearDB() {

        Event.deleteMany({})
            .then(console.log('All evens deleted'))
            .catch(e => console.log(e))

        Member.deleteMany({})
            .then(console.log('All members deleted'))
            .catch(e => console.log(e))
    }

    // clears statistics
    clearStatistics() {
        Statistics.deleteMany({})
            .then(console.log('Statistics cleared'))
            .catch(e => console.log(e))
    }

    // captures statistics from db
    captureStatistics() {
        // Собрать статистику с БД
        // TODO: capture statistics
    }

    generateEvents(count, status) {

        for (let i = 0; i < count; i++) {

            const data = {
                title: `Fake event # ${i}`,
                icon: "/uploads/conference.png",
                status: status,
                time: currentTime,
                date: currentDate,
                platform: "skype",
                description: `This is fake data: ${i}`,
                members: [defaultMember],
                lifecycle: [0],
                institute: 'none',
                stars: 5
            }

            EventsService.createEvent(data)
        }
    }

    generateMembers(count) {
        for (let i = 0; i < count; i++) {
            const data = {
                name: `Fake member $i`,
                icon: "/uploads/egu-logo.png",
                skype: "None",
                phone: `+7(900)835-45-${i}`,
                mail: "random@random.sa",
                timeZone: "+3",
                assistant: `Fake assistant ${i}`,
            }

            MembersService.createMember(data)
        }
    }

    getDefaultMember() {
        return defaultMember
    }
}

module.exports = new DBUtils()
