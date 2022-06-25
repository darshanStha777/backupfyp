const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login/loginform.js')
const passport = require('passport');

const { initializingPassport, isAuthenticated } = require('../middleware/passportConfig.js')

router.get('/', loginController.getloginpage);


router.post('/postlogin', passport.authenticate("local", {
<<<<<<< HEAD
    failureFlash: true,
    failureRedirect: '/',
=======
    failureRedirect: '/login',
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
    session: true
}), loginController.postloginpage);
module.exports = router