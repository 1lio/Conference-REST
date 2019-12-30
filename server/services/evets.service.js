require('../models/event')
require('../models/member')

const mongoose = require('mongoose')
const Event = mongoose.model('event')

class EventsService {

    getEvent(data) {
        return Event.findOne({_id: data}).catch(e => console.log(e))
    }

    getEventsPage(page) {

        const perPage = 10

        return Event
            .find({})
            .skip((perPage * page) - perPage)
            .limit(perPage)
    }

    getEvents(url) {
        if (url === '/all' || url === undefined) {
            return Event.find({})
                .map(event => JSON.stringify(event))
                .catch(e => console.log(e))

        } else if (url === '/day') {

            let data = new Date()

            let year = data.getFullYear()
            let month = data.getMonth() + 1
            let day = data.getDate()

            let findData = (day + "/" + month + "/" + year)

            return Event.find({date: findData})
                .map(event => JSON.stringify(event))
                .catch(e => console.log(e))
        }
    }

    createEvent(data) {
        console.log("post")
        const event = new Event(data)
        return event.save().catch(e => console.log(e))
    }

    updateEvent(data) {
        console.log("put")

        return Event.updateOne({_id: data._id}, {
            $set: {
                title: data.title,
                icon: data.icon,
                status: data.status,
                time: data.time,
                date: data.date,
                platform: data.platform,
                description: data.description
            }
        })
            .catch(e => console.log(e))
    }

    deleteEvent(data) {
        Event.deleteOne({_id: data.id}).catch(e => console.log(e))
    }

    getStatus(status) {
        Event.find({status: status}).catch(e => console.log(e))
    }

    getStars(stars) {
        Event.find({stars: stars}).catch(e => console.log(e))
    }

}

module.exports = new EventsService()
