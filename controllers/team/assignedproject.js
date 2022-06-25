<<<<<<< HEAD
const db = require('../../models')
const AddNewClient = db.addnewclient
const Projectmodel = db.proejct
const Teamproject = db.registernewTeamMember

exports.getassignedpage = async(req, res, next) => {

    const rteam = await req.user.dataValues.id
    const employeeName = await req.user
    console.log(req.user)

    const projectd = await Projectmodel.findAll({ where: { teamid: rteam } }, { include: Teamproject })

    if (!projectd) {
        console.log(" null")
        res.render('employee/notassignedproject', { employeeName })

    } else {
        console.log("value assigned")
        res.render('employee/assignedproject', { projectd, employeeName })

        // const projectname = projectd.dataValues.projectName;
        // const projectprice = projectd.dataValues.projectprice;
        // const projectstartdate = projectd.dataValues.projectstartdate;
        // const projectenddate = projectd.dataValues.projectenddate;
        // const clientrequirement = projectd.dataValues.clientrequirement;
        // res.render('employee/assignedproject', { projectd, projectname, projectprice, projectstartdate, projectenddate, clientrequirement })

    }





}
exports.getsubmitportalpage = async(req, res, next) => {
    const rteam = await req.user.dataValues.id
    const employeeName = await req.user

    const projectd = await Projectmodel.findAll({ where: { teamid: rteam } }, { include: Teamproject })


    res.render('employee/submitportal', { projectd, submitpass: 'not submit', employeeName })
}
exports.getprofilepage = async(req, res, next) => {
    const employeeName = await req.user

    res.render('employee/profile', { employeeName })

}

exports.postsubmitportal = async(req, res, next) => {
    const rteam = await req.user.dataValues.id;
    const employeeName = await req.user
    console.log("requested user are ___", rteam)
    let submittedproject = {
        submittedproject: req.file.filename
    }
    let projectid = await req.body.sproject
    const projectsubmitted = await Projectmodel.update(submittedproject, { where: { id: projectid } })
    const projectd = await Projectmodel.findAll({ where: { teamid: rteam } }, { include: Teamproject })
    res.render('employee/submitportal', { projectd, submitpass: 'submit', employeeName })
}
exports.getprofileupdatepage = async(req, res, next) => {
    const reqteam = await req.params.id;
    const rupdatet = await Teamproject.findOne({ where: { id: reqteam } })
    const employeeName = await req.user
    res.render('employee/editprofileteam', { rupdatet, employeeName })
}
exports.postupdatedetails = async(req, res, next) => {
    const reqteamid = req.params.id;
    console.log(reqteamid)
    console.log(req.body)
    const addteamdetails = {
        memberName: req.body.memberName,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
    }

    const updateteamdata = Teamproject.update(addteamdetails, { where: { id: reqteamid } })
    res.redirect('/team/profile')
=======
exports.getassignedpage = (req, res, next) => {
    res.render('employee/assignedproject')
}
exports.getsubmitportalpage = (req, res, next) => {
    res.render('employee/submitportal')
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
}