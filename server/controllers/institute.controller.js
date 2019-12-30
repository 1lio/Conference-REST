const InstituteService = require('../services/institute.service')

class InstituteController {

    // CRUD Institutes
    async getInstitutes(req, res) {
        console.log('get institute')
        let result = await InstituteService.getInstitutes()

        if (result) return res.status(200).send(result)
        else return res.status(500).send({message: 'Error while getting institutes'})
    }

    async addInstitute(req, res) {
        console.log('add institutes: ' + req.body.title)
        if (req.body) {
            let result = await InstituteService.createInstitute(req.body)
            if (result) return res.status(200).send({message: 'institute created'})
            else return res.status(500).send({message: 'Unable create institute.'})
        } else return res.status(400).send({message: 'Bad request.'})
    }

    async updateInstitute(req, res) {
        console.log('update institutes: ' + req.body._id)
        if (req.body) {
            let result = await InstituteService.updateInstitute(req.body)
            if (result) return res.status(200).send(result)
            else return res.status(500).send({message: 'Unable update event.'})
        } else return res.status(400).send({message: 'Bad request.'})
    }

    async deleteInstitute(req, res) {
        console.log('delete event: ' + req.body.id)
        if (req.body) {
            let result = await InstituteService.deleteInstitute(req.body)
            if (result) {
                return res.status(200).send(result)
            } else return res.status(500).send({message: 'Unable delete event.'})
        } else return res.status(400).send({message: 'Bad request.'})

    }
}

module.exports = new InstituteController()
