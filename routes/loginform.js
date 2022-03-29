const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login/loginform.js')
const passport = require('passport');

const { initializingPassport, isAuthenticated } = require('../middleware/passportConfig.js')

router.get('/login', loginController.getloginpage);


router.post('/postlogin', passport.authenticate("local", {
    failureRedirect: "/register",
    session: true
}), loginController.postloginpage);
module.exports = router