const EventsService = require('../services/evets.service')

class EventsController {

    async getEvent(req, res) {
        console.log('get event')
        let id = req.query.id
        let result = await EventsService.getEvent(id)

        if (result) return res.status(200).send(result)
        else return res.status(500).send({message: ` Error while getting event ID: ${id}`})
    }

    async getEventList(req, res) {
        console.log('get events list')
        let result = await EventsService.getEvents()

        if (result) return res.status(200).send(result)
        else return res.status(500).send({message: 'Error while getting events'})
    }

    async createEvent(req, res) {
        console.log('create event: ' + req.body.title)
        if (req.body) {
            let result = await EventsService.createEvent(req.body)
            if (result) return res.status(200).send({message: 'Event created'})
            else return res.status(500).send({message: 'Unable create event.'})
        } else return res.status(400).send({message: 'Bad request.'})
    }

    async updateEvent(req, res) {
        console.log('update event: ' + req.body._id)
        if (req.body) {
            let result = await EventsService.updateEvent(req.body)
            if (result) return res.status(200).send(result)
            else return res.status(500).send({message: 'Unable update event.'})
        } else return res.status(400).send({message: 'Bad request.'})
    }

    async deleteEvent(req, res) {
        console.log('delete event: ' + req.body.id)
        if (req.body) {
            let result = await EventsService.deleteEvent(req.body)
            if (result) {
                return res.status(200).send(result)
            } else return res.status(500).send({message: 'Unable delete event.'})
        } else return res.status(400).send({message: 'Bad request.'})
    }

    async getPage(req, res) {
        const page = req.params.page || 1
        console.log('get page event: ' + page)

        let result = await EventsService.getEventsPage(page)
        if (result) return res.status(200).send(result)

        else return res.status(500).send({message: ` Error not page: ${page}`})
    }

    async getEventStatus(req, res) {

        const status = req.params.status
        console.log('get event status: ' + status)

        let result = await EventsService.getStatus(status)
        if (result) return res.status(200).send(result)

        else return res.status(500).send({message: ` Error not found: ${status}`})
    }

    async getEventStars(req, res) {
        const stars = req.params.stars
        console.log('get event stars: ' + stars)

        let result = await EventsService.getStars(stars)
        if (result) return res.status(200).send(result)

        else return res.status(500).send({message: ` Error not found events: ${stars}`})
    }
}

module.exports = new EventsController()
