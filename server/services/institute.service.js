require('../models/institute')

const mongoose = require('mongoose')
const Institute = mongoose.model('institute')

class InstituteService {

    getInstitutes  () {Institute.find({}).catch(e => console.log(e))}

    createInstitute(data) {
        console.log("add institute")
        const event = new Institute(data)
        return event.save().catch(e => console.log(e))
    }

    updateInstitute(data) {
        console.log("put institute")
        return Institute.updateOne({_id: data._id}, {$set: {name: data.name}}).catch(e => console.log(e))
    }

    deleteInstitute  (data){ Institute.deleteOne({_id: data.id}).catch(e => console.log(e))}
}

module.exports = new InstituteService()
