const express = require('express')
const router = express.Router()
const MembersController = require('../controllers/members.controller')

// List all members
router
    .route('/list')
    .get(MembersController.getMemberList)

// The member
router
    .route('/')
    .get(MembersController.getMember)
    .post(MembersController.createMember)
    .put(MembersController.updateMember)
    .delete(MembersController.deleteMember)

module.exports = router