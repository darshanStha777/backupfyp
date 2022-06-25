const db = require('../../models')
const Teamproject = db.registernewTeamMember
const AddNewClient = db.addnewclient
const Projectmodel = db.proejct



exports.getindexpage = async(req, res, next) => {
    const ruserdetails = await req.user
    const ruserid = await req.user.id


    const allproject = await Projectmodel.findAll({ where: { adminId: ruserid } }, { include: Teamproject })
        // const totalnewproject = await Projectmodel.aggregate('teamId', 'DISTINCT', { plain: false, where: { teamId: ruserid } })
        // const completeprojectall = await Projectmodel.aggregate('submittedproject', 'DISTINCT', { plain: false, where: { teamId: ruserid } })



    res.render('admin/indexadmin.ejs', { ruserdetails, allproject });

}