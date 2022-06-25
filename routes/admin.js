const express = require('express');

const router = express.Router();
const multer = require('multer');
const upload = require('../middleware/addteamuploadimage');

const clientre = require('../middleware/addprojectclientrequirement')


const { initializingPassport, isAuthenticated } = require('../middleware/passportConfig.js')



const indexadminController = require('../controllers/admin/indexadmin.js')
router.get('/', isAuthenticated, indexadminController.getindexpage);


const teamController = require('../controllers/admin/team.js')
router.get('/addteam', isAuthenticated, teamController.getaddteampage);
router.get('/viewteam', isAuthenticated, teamController.getviewteampage);

router.get('/teamdelete/:id', teamController.getteamdeletepage)


router.post('/addnewEmployee', upload.single('teamaddimage'), teamController.postaddteampage)

const projectController = require('../controllers/admin/project.js')
router.get('/addproject', projectController.getaddprojectpage);
router.get('/viewproject', projectController.getviewprojectpage);
router.post('/addprojectdetails', clientre.single('clientrequirement'), projectController.postaddproject)

router.get('/projectdelete/:id', projectController.getdeleteproject)



router.get('/assignproject/:id', projectController.assignprojectpage)
router.post('/assignpuser/:id', projectController.postassignprojectpage)

//clinet
const clientController = require('../controllers/admin/client.js')
router.get('/addclient', clientController.getaddclientpage);
router.get('/viewclient', clientController.getviewclientpage);
router.get('/clientdelete/:id', clientController.getclientdelete)




router.post('/addnewclient', clientController.postaddclientpage)

const messageController = require('../controllers/admin/message.js')
router.get('/message', messageController.getmessagepage)


const allassignedpage = require('../controllers/admin/assigned')
router.get('/assignedprojectpage', allassignedpage.getassignedpage)
router.post('/submittoclient/:id', allassignedpage.getsubmittoclient)


router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
})
const registation = require('../controllers/registration/registration')


router.get('/registration', registation.getregistrationpage)
router.post('/admindetails', registation.postregistrationpage)

const profilecontroller = require('../controllers/profile/profile')
router.get('/profile', profilecontroller.getprofilepage)
router.get('/updateprofile/:id', profilecontroller.getupdatepage)
router.post('/updateprofiledata/:id', profilecontroller.postupdateprofile)
module.exports = router