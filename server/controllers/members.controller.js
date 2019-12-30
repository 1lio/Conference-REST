const MembersService = require('../services/members.service');

class MembersController {

    async getMember(req, res) {
        let id = req.query.id;
        let result = await MembersService.getMember(id);

        if (result) return res.status(200).send(result);
        else return res.status(500).send({message: ` Error while getting event ID: ${id}`})
    }

    async getMemberList(req, res) {
        let result = await MembersService.getMembers();

        if (result) return res.status(200).send(result);
        else return res.status(500).send({message: 'Error while getting events'})
    }

    async createMember(req, res) {
        if (req.body) {
            let result = await MembersService.createMember(req.body);

            if (result) return res.status(200).send({message: 'Event created'});

            else return res.status(500).send({message: 'Unable create event.'})

        } else return res.status(400).send({message: 'Bad request.'})
    }

    async updateMember(req, res) {
        if (req.body) {
            let result = await MembersService.updateMember(req.body);

            if (result) return res.status(200).send(result);
            else return res.status(500).send({message: 'Unable update event.'})

        } else return res.status(400).send({message: 'Bad request.'})
    }

    async deleteMember(req, res) {
        if (req.body) {

            let result = await MembersService.deleteMember(req.body);

            if (result) return res.status(200).send(result);
            else return res.status(500).send({message: 'Unable delete event.'})

        } else return res.status(400).send({message: 'Bad request.'})
    }
}

module.exports = new MembersController();
