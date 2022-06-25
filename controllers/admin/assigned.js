const db = require('../../models')
const AddNewClient = db.addnewclient
const Projectmodel = db.proejct
const Teamproject = db.registernewTeamMember
exports.getassignedpage = async(req, res, next) => {
    const ruserdetails = await req.user
    const ruser = await req.user.dataValues.id;
    const managerName = await req.user.dataValues.fullname


    const allproject = await Projectmodel.findAll({ where: { adminId: ruser } }, { include: Teamproject })
    console.log(allproject)
    res.render('admin/allassignedpage', { allproject, managerName, ruserdetails })
}
exports.getsubmittoclient = async(req, res, next) => {
    const ruserdetails = await req.user
    const ruser = await req.params.id
    const submitproject = await Projectmodel.findOne({ where: { id: ruser } }, { include: Teamproject })
    console.log("id ----" + submitproject)
    const employeesubmitted = submitproject.submittedproject
    console.log("aaa" + employeesubmitted)
    const submittotheclient = employeesubmitted;
    let alldetails = {
        submittoclient: submittotheclient
    }
    const submittoclinet = await Projectmodel.update(alldetails, { where: { id: ruserdetails } })
    console.log("done")
    res.redirect('/admin/assignedprojectpage')
}