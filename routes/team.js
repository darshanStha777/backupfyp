const express = require('express');
const router = express.Router();
const teamcontroller = require('../controllers/team/assignedproject');
const teamsubmitp = require('../middleware/teamsubmitproject')


router.get('/', teamcontroller.getassignedpage)
router.get('/submitportal', teamcontroller.getsubmitportalpage)
router.post('/submitproject', teamsubmitp.single('completeproject'), teamcontroller.postsubmitportal)

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
})

router.get('/profile', teamcontroller.getprofilepage)
router.get('/teamprofileupdate/:id', teamcontroller.getprofileupdatepage)
router.post('/updateprofiled/:id', teamcontroller.postupdatedetails)
module.exports = router