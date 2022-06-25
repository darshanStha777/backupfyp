const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login/loginform.js')
const passport = require('passport');

const { initializingPassport, isAuthenticated } = require('../middleware/passportConfig.js')

router.get('/', loginController.getloginpage);


router.post('/postlogin', passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: '/',
    session: true
}), loginController.postloginpage);
module.exports = router