const express = require('express');
const router = express.Router();
const StatisticsController = require('../controllers/statistics.controller');

router
    .route('/')
    .get(StatisticsController.getStatistics);


module.exports = router;
