const db = require('../../models')
const RegisterNewTeamMember = db.registernewTeamMember

exports.getindexpage = async(req, res, next) => {
    const requser = await req.user
    console.log("requested user details", requser)
    res.render('admin/indexadmin.ejs');

}