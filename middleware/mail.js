const nodemailer = require('nodemailer')
const company = require('../company.js')

exports.mail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: company.user,
        pass: company.pass
    }
})