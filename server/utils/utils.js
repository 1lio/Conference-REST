const dbUtils = require('./dbutils')

let data = new Date()

let year = data.getFullYear()
let month = data.getMonth()
let day = data.getDate()
let hour = data.getHours()
let minutes = data.getMinutes()
let seconds = data.getSeconds()

// other utils
clearUploads = () => {
    //TODO: Очистка хранилища кроме default
}

let getDate = `${day}/${month}/${year}`
let getTime =  `${hour}:${minutes}:${seconds}`

// Time Utils

//TODO: Написать функция конвертирования времени из 10:15:06 в число (типа 60120)
const convertStringToTime = (string) => {}
const convertStringToDate = (String) => {}
const convertTimeToString = (time) => {}
const convertDateToString = (date) => {}

// db utils

clearDB = () => dbUtils.clearDB()

clearStatistics = () => dbUtils.clearStatistics()

captureStatistics = () => dbUtils.captureStatistics()

generateFakeEvents = (count, status) => dbUtils.generateEvents(count, status)

generateFakeMembers = (count) => dbUtils.generateMembers(count)

module.exports = {
    clearDB,
    clearStatistics,
    captureStatistics,
    generateFakeEvents,
    generateFakeMembers,
    getDate,
    getTime
}
