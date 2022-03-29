const db = require('../../models')
const RegisterNewTeamMember = db.registernewTeamMember
const { mail } = require('../../middleware/mail')

exports.getaddteampage = (req, res, next) => {
    res.render('admin/addteam', { message: false, alreadyuser: false })
}
exports.getviewteampage = async(req, res, next) => {
    const reuser = await req.user
    console.log("requested user are ___", reuser)
    RegisterNewTeamMember.findAll({})
        .then(alluserdetails => {
            res.render('admin/viewteam', { alluserdetails })
        })
        .catch(err => {
            console.error(" Find data error in admin dashboard ", err)
        })

}

exports.postaddteampage = async(req, res, next) => {
    const alreadyuser = await RegisterNewTeamMember.findOne({ where: { email: req.body.email } })
    if (alreadyuser) return res.render('admin/addteam', { message: false, alreadyuser: true })
    let addteamdetails = {
        memberName: req.body.memberName,
        position: req.body.position,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        address: req.body.address,
        teamaddimage: req.file.filename,
        password: req.body.teampassword
    }
    const newteamMember = await RegisterNewTeamMember.create(addteamdetails)

    try {
        let name = req.body.memberName
        let email = req.body.email
        let position = req.body.position
        let password = req.body.teampassword
        mail.sendMail({
            from: 'myteamproject8@gmail.com',
            to: email,
            subject: 'Team Member enrolled.',
            html: '<h1>Hello ' + name + '</h1><hr><p>We are so glad to include you as our team member. You have been sucessfully registered as a Team Member with ' +
                email + ' and on a position of ' + position + '. Hope you enjoy! <br><br>login details: <br>id: ' + email + '<br>password: ' +
                password + '<br>To login please visit the route: /login and select usertype employee. <br> Data shared hereby are company property. you are neither allowed to share or distribute or forward this Message. If any such cases are found then legal action are taken.<br>Thank You!'
        })
        console.log("mail has been send")
        console.log(" Register New Team Member")
        res.render('admin/addteam', { message: true, alreadyuser: false })
    } catch (err) {
        console.log(err);
    }
}