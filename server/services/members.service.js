require('../models/member')

const mongoose = require('mongoose')
const Member = mongoose.model('member')

class MembersService {

    getMember(data) {
        return Member.findOne({_id: data}).catch(e => console.log(e))
    }

    getMembers() {
        return Member.find({}).catch(e => console.log(e))
    }

    createMember(data) {
        const member = new Member(data);
        return member.save().catch(e => console.log(e))
    }

    updateMember(data) {
        return Member.updateOne({_id: data._id}, {
            $set: {
                name: data.name,
                icon: data.icon,
                phone: data.phone,
                mail: data.mail,
                timeZone: data.timeZone,
                assistant: data.assistant
            }
        })
            .catch(e => console.log(e))
    }

    deleteMember(data) {
        return Member.deleteOne({_id: data.id}).catch(e => console.log(e))
    }
}

module.exports = new MembersService()
