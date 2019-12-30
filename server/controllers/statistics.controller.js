const StatisticsService = require('../services/statistics.service')

let data = new Date
let year = data.getFullYear()
let mount = data.getMonth()
let day = data.getDay()

class StatisticsController {

    // Собрать всю статистику
    async captureStatistics() {
        console.log('Capturing statistics...')
        let result = await StatisticsService.captureStatistics()
        if (result === true) return console.log('Statistics is capture')
        else return console.log('capture statistics error')
    }

    // В даннаом методе возвращается ранее собранная статистика
    async getStatistics(req, res) {
        console.log('get all statistics...')
        let result = await StatisticsService.getAll()
        if (result) return res.status(200).send(result)
        else return res.status(500).send({message: 'Error while getting all statistics'})
    }

    // В данном методе возвращается статистика по конкрентной модели согласно параметрам
    async getModelStatistics(req, res) {
        console.log('get model statistics...')

        let model =    req.query.model    || 'event' // event, member, institute
        let period =   req.query.period   || 'all'   // all, year, mount, week, day(current day) or date

        // Что-то конкретное
        let question = req.query.question || 'not'   // status, platform, members, institutes
        let value =    req.query.value    || 'not'   // string, number

        let filter =   req.query.filter   || 'not'   // max, min, first, last

        // Запрос к БД
        let result = await StatisticsService.getModel(model, period, question, value)

        // Результат из БД
        if (result) {

            // Дальнейшая обработка фильтуруем тут
            return res.status(200).send(result)

        }
        else return res.status(500).send({message: 'Error while getting event statistics'})
    }


    getMaxEventsAllTime() {}

    getMaxEvensYear(year) {}

    getMaxEventsMount() {}

    getMaxEventsWeek() {}

    getMaxEventsDay() {}

    getCountReplacedEvents() { }

    getCanceledEvents() { }

    getEventsDuration() {    }

    getEventsMaxDuration() {    }

    getEventsMinDuration() {    }

    getEventsAverageDuration() {    }

    getEventsAverageStars() {   }


    // Members

    getMaxMembersInEvent() {}

    getCountMembers() {}

    getMembersTimezone() {}

    getPopularMember() {  }


    // Institute

    getMaxEventsFromInstitutes() {}

    getMinEventsFromInstitutes() {}

    // Platform

    getPopularPlatform() {    }

    getPopularPlatformUsed() {}

}

module.exports = new StatisticsController()