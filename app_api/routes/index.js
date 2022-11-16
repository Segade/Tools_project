const express = require('express');
const router = express.Router();

const ctrlMembers = require('../controllers/members');

 
router
  .route('/api/members')
  .get(ctrlMembers.membersList)
/* 
router
    .route('/api/members/login/:Email/p/:Password')
    .get(ctrlMembers.membersLogin)
*/

module.exports = router;
