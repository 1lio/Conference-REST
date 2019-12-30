// Create by Sukhov Viacheslav 08.12.2019
const express = require('express')
const router = express.Router()
const EventsController = require('../controllers/events.controller')
const InstituteController = require('../controllers/institute.controller')

// List all events
router
    .route('/list')
    .get(EventsController.getEventList)

// The events
router
    .route('/')
    .get(EventsController.getEvent)
    .post(EventsController.createEvent)
    .put(EventsController.updateEvent)
    .delete(EventsController.deleteEvent)

// Status
router
    .route('/status/:status')
    .get(EventsController.getEventStatus)


// Stars
router
    .route('/stars/:stars')
    .get(EventsController.getEventStars)

// Institutes
router
    .route('/institutes')
    .get(InstituteController.getInstitutes)
    .post(InstituteController.addInstitute)
    .put(InstituteController.updateInstitute)
    .delete(InstituteController.deleteInstitute)

// Paging
router
    .route('/:page')
    .get(EventsController.getPage)

module.exports = router
