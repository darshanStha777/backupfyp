const express = require('express');
const router = express.Router();
const { initializingPassport, isAuthenticated } = require('../middleware/passportConfig.js')

const clientcontroller = require('../controllers/client/maincontroller')
<<<<<<< HEAD
=======

router.get('/', isAuthenticated, clientcontroller.getindexpage)
router.get('/paymentpage', isAuthenticated, clientcontroller.getpaymentpage)
router.get('/message', clientcontroller.getmessagepage)



router.post('/messagedetails', clientcontroller.postmessagepage)


router.post('/khalti/payment/verify', isAuthenticated, clientcontroller.paymentcontroller)

router.get('/khalti/storepayment', clientcontroller.storepayment)
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1

router.get('/', isAuthenticated, clientcontroller.getindexpage)
router.get('/paymentpage', isAuthenticated, clientcontroller.getpaymentpage)
router.get('/message', clientcontroller.getmessagepage)



router.post('/messagedetails', clientcontroller.postmessagepage)


router.post('/khalti/payment/verify', isAuthenticated, clientcontroller.paymentcontroller)

router.get('/khalti/storepayment', clientcontroller.storepayment)

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
})
router.get('/profile', clientcontroller.getclientprofile)
router.get('/profileupdate/:id', clientcontroller.getprofiledata)
router.post('/profileupdatedetails/:id', clientcontroller.postupdateprofiledata)
module.exports = router