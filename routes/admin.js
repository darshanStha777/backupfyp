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
router.get('/', isAuthenticated, indexadminController.getindexpage);


const teamController = require('../controllers/admin/team.js')
router.get('/addteam', isAuthenticated, teamController.getaddteampage);
router.get('/viewteam', isAuthenticated, teamController.getviewteampage);


router.post('/addnewEmployee', upload.single('teamaddimage'), teamController.postaddteampage)

const projectController = require('../controllers/admin/project.js')
router.get('/addproject', isAuthenticated, projectController.getaddprojectpage);
router.get('/viewproject', isAuthenticated, projectController.getviewprojectpage);



//clinet
const clientController = require('../controllers/admin/client.js')
router.get('/addclient', clientController.getaddclientpage);
router.get('/viewclient', clientController.getviewclientpage);

router.post('/addnewclient', clientController.postaddclientpage)




module.exports = router