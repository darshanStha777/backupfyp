const res = require('express/lib/response');
const LocalStrategy = require('passport-local')
const db = require('../models')
const RegisterNewTeamMember = db.registernewTeamMember
const admindetails = db.admin
const clientdetails = db.addnewclient


exports.initializingPassport = (passport) => {


    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password', passReqToCallback: true }, async(req, email, password, done) => {
        // const userType = await req.body.usertype

        console.log(req.body.usertype)
        userType = await req.body.usertype

        if (userType === "admin") {
            const user = await admindetails.findOne({ where: { email } });

            try {
                if (!user) return done(null, false);

                if (user.password !== password) return done(null, false);
                return done(null, user)

            } catch (err) {
                return done(err, false)

            }
        }

        if (userType === "client") {
            const user = await clientdetails.findOne({ where: { email } });
            try {
                if (!user) return done(null, false);

                if (user.password !== password) return done(null, false);
                return done(null, user)

            } catch (err) {
                return done(err, false)

            }
        }
        if (userType === "employee") {
            const user = await RegisterNewTeamMember.findOne({ where: { email } });

            try {
                if (!user) return done(null, false);
                console.log("user found")
                if (user.password !== password) return done(null, false);

                return done(null, user)

            } catch (err) {
                return done(err, false)
            }
        }
    }));
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async(id, done) => {

        if (userType === "admin") {
            try {
                const user = await admindetails.findByPk(id);
                done(null, user);
            } catch (err) {
                done(err, false)
            }
        }
        if (userType === "employee") {
            try {
                const user = await RegisterNewTeamMember.findByPk(id);
                done(null, user);
            } catch (err) {
                done(err, false)
            }
        }
        if (userType === "client") {
            try {
                const user = await clientdetails.findByPk(id);
                done(null, user);
            } catch (err) {
                done(err, false)
            }
        }

    })
}

exports.isAuthenticated = (req, res, next) => {

    if (req.user) return next();

    res.redirect("/login")
}