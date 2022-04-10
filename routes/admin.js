const express = require('express');

const router = express.Router();
const multer = require('multer');
const upload = require('../middleware/addteamuploadimage');
// const storage = multer.diskStorage({
//     destination: './public/src/uploadedimage/',
//     filename: (req, file, cb) => {
//         return cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
//         // `${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({
//     storage: storage
// })

const { initializingPassport, isAuthenticated } = require('../middleware/passportConfig.js')



const indexadminController = require('../controllers/admin/indexadmin.js')
router.get('/', indexadminController.getindexpage);


const teamController = require('../controllers/admin/team.js')
router.get('/addteam', teamController.getaddteampage);
router.get('/viewteam', teamController.getviewteampage);


router.post('/addnewEmployee', upload.single('teamaddimage'), teamController.postaddteampage)

const projectController = require('../controllers/admin/project.js')
router.get('/addproject', projectController.getaddprojectpage);
router.get('/viewproject', projectController.getviewprojectpage);
router.post('/addprojectdetails', projectController.postaddproject)

router.get('/assignproject/:id', projectController.assignprojectpage)
router.post('/assignpuser/:id', projectController.postassignprojectpage)

//clinet
const clientController = require('../controllers/admin/client.js')
router.get('/addclient', clientController.getaddclientpage);
router.get('/viewclient', clientController.getviewclientpage);

router.post('/addnewclient', clientController.postaddclientpage)

const messageController = require('../controllers/admin/message.js')
router.get('/message', messageController.getmessagepage)


module.exports = router