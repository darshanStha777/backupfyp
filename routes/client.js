const express = require('express');
const router = express.Router();
const { initializingPassport, isAuthenticated } = require('../middleware/passportConfig.js')

const clientcontroller = require('../controllers/client/maincontroller')

router.get('/', isAuthenticated, clientcontroller.getindexpage)
router.get('/paymentpage', isAuthenticated, clientcontroller.getpaymentpage)
router.get('/message', clientcontroller.getmessagepage)



router.post('/messagedetails', clientcontroller.postmessagepage)


router.post('/khalti/payment/verify', isAuthenticated, clientcontroller.paymentcontroller)

router.get('/khalti/storepayment', clientcontroller.storepayment)


module.exports = router