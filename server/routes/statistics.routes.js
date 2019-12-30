const express = require('express')
const router = express.Router()
const StatisticsController = require('../controllers/statistics.controller')

router
    .route('/')
    .get(StatisticsController.getStatistics)

router
    .route('/events')
    .get(StatisticsController.getEvents)

router
    .route('/members')
    .get(StatisticsController.getMembers)

module.exports = router
