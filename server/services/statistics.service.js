require('../models/statistics');
require('../models/event');
require('../models/member');
require('../models/institute');

const mongoose = require('mongoose');

const Statistics = mongoose.model('statistics');
const Event = mongoose.model('event');
const Member = mongoose.model('member');
const Institute = mongoose.model('institute');

let data = new Date;
let year = data.getFullYear();
let mount = data.getMonth();
let day = data.getDay();

class StatisticsService {

    // Фильтрованный запрос
    getModel(model, period, property, value) {

        let yearFrom = year;
        let yearTo = year;
        let mountFrom = mount;
        let mountTo = mount;
        let dayFrom = day;
        let dayTo = day;

        // Определяем модель
        let findModel;
        switch (model) {
            case 'event':
                findModel = Event;
                break;
            case 'member':
                findModel = Member;
                break;
            case 'institute':
                findModel = Institute;
                break
        }

        // Определяем период
        let findPeriod = {
            $gte: ISODate(`${yearFrom}-${mountFrom}-${dayFrom} 00:00:00Z`),
            $lte: ISODate(`${yearTo}-${mountTo}-${dayTo} 23:59:00Z`)
        };
        switch (period) {
            // current day
            case 'day' || 'current' || 'currentDay':
                break;
            case period.length === 2 : {
                // день
                dayFrom = period;
                dayTo = period;
                break
            }
            case 'january' || 'february' || 'march' || 'april' || 'may' || 'june' || 'july' || 'august'
            || 'september' || 'october' || 'november' || 'december' || 'jan' || 'feb' || 'mar' || 'apr' || 'may' || 'jun'
            || 'jul' || 'aug' || 'sep' || 'oct' || 'nov' || 'dec': {

                // месяц
                let findMount = 1;
                let mouths = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
                    'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

                mouths.forEach((value, index) => {
                    if (value === period) findMount = index + 1
                });

                dayFrom = 1;
                dayTo = 31;

                mountFrom = findMount;
                mountFrom = findMount;
                break
            }
            case period.length === 4 : {
                // год
                dayFrom = 1;
                dayTo = 31;

                mountFrom = 1;
                mountTo = 12;

                yearFrom = period;
                yearTo = period;
                break
            }
            case period.length === 9 : {

                // TODO: Переделать костыль на регулярки
                let fday = period[0] + period[1];
                let fmount = period[3] + period[4];
                let fyear = period[6] + period[7] + period[8] + period[9];

                // определенная дата
                dayFrom = fday;
                dayTo = fday;

                mountFrom = fmount;
                mountFrom = fmount;

                yearFrom = fyear;
                yearTo = fyear;
                break
            }
            default : {
                //За весь период
                dayFrom = 1;
                dayTo = 31;

                mountFrom = 1;
                mountFrom = 12;

                yearFrom = 2019;
                yearTo = year
            }

        }

        // Определяем свойство
        // TODO: Проверка на совместимость модели | пока пусть лучше упадет

        let findProp;
        if (property === 'not') findProp = ''; else findProp = property;

        // Определяем значение
        let findValue = '';
        if (value === 'not') findValue = ''; else findValue = value;

        let obj = {};
        obj[findProp] = findValue;
        obj[data] = findPeriod;
        // Делаем запрос в БД
        return findModel.find(obj)
    }


    captureStatistics() {
    }

    // ----------------------------------------------------------------------------------------------
    getAll() {
        return Statistics.findOne({}).catch(e => console.log(e))
    }

    getEvents(period, question, value, filter) {

    }

    getMembers(period, question, value, filter) {

    }
}

module.exports = new StatisticsService;
