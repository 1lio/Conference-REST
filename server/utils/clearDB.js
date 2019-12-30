// Аккуратнее с данным файлом

require('../models/event');
require('../models/member');

const mongoose = require('mongoose');
const Event = mongoose.model('event');
const Member = mongoose.model('member');

class Cleaner {
    clearDB() {

        Event.deleteMany({})
            .then(console.log('All evens deleted'))
            .catch(e => console.log(e));

        Member.deleteMany({})
            .then(console.log('All members deleted'))
            .catch(e => console.log(e))
    }
}

module.exports = new Cleaner();
