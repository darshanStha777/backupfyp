const express = require('express');
const router = express.Router();
const teamcontroller = require('../controllers/team/assignedproject');

router.get('/', teamcontroller.getassignedpage)
router.get('/submitportal', teamcontroller.getsubmitportalpage)


module.exports = router