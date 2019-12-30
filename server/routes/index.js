const express = require('express');
const router = express.Router();
const apiDoc = require('../doc/api.doc');

const eventsRoutes = require('./events.routes');
const membersRoutes = require('./members.routes');
const statisticRoutes = require('./statistics.routes');
const storage = require('../services/file.manager');

router.use('/info/', apiDoc.getApiDoc);

router.use('/events/', eventsRoutes);
router.use('/members/', membersRoutes);
router.use('/statistics/', statisticRoutes);

// Upload file
router
    .route('/uploads')
    .get(storage.getImage)
    .post(storage.uploadFile);

//TODO: FIX 404
//router.use((req, res) => {res.status(404).send({status: "404 NotFound"})})

//router.use('/calendar/', membersRoutes)
//router.use('/cabinet/', membersRoutes)

module.exports = router;
