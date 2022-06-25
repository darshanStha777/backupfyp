const db = require('../../models')
const AddNewClient = db.addnewclient
const Projectmodel = db.proejct
const Teamproject = db.registernewTeamMember
const Admin = db.admin
exports.getprofilepage = async(req, res, next) => {
    const ruserdetails = await req.user
    res.render('admin/profile', { ruserdetails })
}
exports.getupdatepage = async(req, res, next) => {
    const ruserdetails = await req.user
    const requserid = await req.params.id
    const reqadmin = await Admin.findOne({ where: { id: requserid } })
    console.log(reqadmin)
    res.render('admin/editprofile', { ruserdetails, reqadmin })
}
exports.postupdateprofile = async(req, res, next) => {
    const ruserdetails = await req.user
    const requserid = await req.params.id
    let registrationadmin = {
        fullname: req.body.fullname,
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: req.body.password
    }
    const updateadmind = await Admin.update(registrationadmin, { where: { id: requserid } })
    res.redirect('/admin/profile')
}