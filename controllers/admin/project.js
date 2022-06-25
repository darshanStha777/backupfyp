const db = require('../../models')
const AddNewClient = db.addnewclient
const Projectmodel = db.proejct
const Teamproject = db.registernewTeamMember

const { mail } = require('../../middleware/mail')
<<<<<<< HEAD
let radminid;
exports.getaddprojectpage = async(req, res, next) => {
    const ruserdetails = await req.user
    radminid = ruserdetails.dataValues.id
    const clinetdetails = await AddNewClient.findAll({ where: { adminId: radminid } })
    console.log(clinetdetails)
    res.render('admin/addproject.ejs', { clinetdetails, projectMessage: false, ruserdetails });
=======

exports.getaddprojectpage = async(req, res, next) => {
    const clinetdetails = await AddNewClient.findAll({})
    console.log(clinetdetails)
    res.render('admin/addproject.ejs', { clinetdetails, projectMessage: false });
}


exports.getviewprojectpage = async(req, res, next) => {
    const allproject = await Projectmodel.findAll({})
    res.render('admin/viewproject.ejs', { allproject });
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
}
exports.postaddproject = async(req, res, next) => {

    var projecttotalprice = parseInt(req.body.projectprice)
    console.log(projecttotalprice)
    var padvance = parseInt(req.body.priceAdvance)
    console.log(padvance)
    var pdue = projecttotalprice - padvance
    console.log(pdue)
    const newprojectdetails = {
        projectName: req.body.projectName,
        projectcategory: req.body.projectcategory,
        projectprice: req.body.projectprice,
        priceAdvance: req.body.priceAdvance,
        pricedue: pdue,
        projectfile: req.body.projectName,
        projectstartdate: req.body.projectstartdate,
        projectenddate: req.body.projectenddate,
        clientId: req.body.clientId,

<<<<<<< HEAD
exports.getviewprojectpage = async(req, res, next) => {
    const ruserdetails = await req.user
    const ruser = ruserdetails.dataValues.id
    const allproject = await Projectmodel.findAll({ where: { adminId: ruser } }, { include: Teamproject })
    console.log(allproject)
        // res.status(200).json(allproject)
    res.render('admin/viewproject.ejs', { allproject, ruserdetails });
}
exports.postaddproject = async(req, res, next) => {
    const ruserdetails = await req.user
    var projecttotalprice = parseInt(req.body.projectprice)
    console.log(projecttotalprice)
    var padvance = parseInt(req.body.priceAdvance)
    console.log(padvance)
    var pdue = projecttotalprice - padvance
    console.log(pdue)
    const newprojectdetails = {
        projectName: req.body.projectName,
        projectcategory: req.body.projectcategory,
        projectprice: req.body.projectprice,
        priceAdvance: req.body.priceAdvance,
        pricedue: pdue,
        projectfile: req.body.projectName,
        clientrequirement: req.file.filename,
        projectstartdate: req.body.projectstartdate,
        projectenddate: req.body.projectenddate,
        clientId: req.body.clientId,
        adminId: radminid

=======
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
    }
    const newproject = await Projectmodel.create(newprojectdetails)
    console.log("project Added")
    res.redirect('/admin/addproject')
}



exports.assignprojectpage = async(req, res, next) => {
<<<<<<< HEAD
    const requadminid = await req.user.dataValues.id;
    const ruserdetails = await req.user
    console.log(requadminid)
    const ruser = await req.params.id
    console.log(ruser)
    const allteammember = await Teamproject.findAll({ where: { adminId: requadminid } })
    res.render('admin/assignproject', { ruser, allteammember, ruserdetails });
=======
    const ruser = await req.params.id
    console.log(ruser)
    const allteammember = await Teamproject.findAll({})
    res.render('admin/assignproject', { ruser, allteammember });
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
    console.log(allteammember)
}
exports.postassignprojectpage = async(req, res, next) => {
    const ruser = await req.params.id
<<<<<<< HEAD
    const ruserdetails = await req.user
=======
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
    console.log(ruser)
    const requestteamid = await req.body.teamId
    console.log(requestteamid)
    let pdwithteam = {
        teamId: requestteamid
    }
    const projectassigned = await Projectmodel.update(pdwithteam, { where: { id: ruser } })
    res.redirect('/admin/viewproject')
<<<<<<< HEAD
}
exports.getdeleteproject = (req, res, next) => {
    let projectiidd = req.params.id
    const deleteteproject = Projectmodel.destroy({ where: { id: projectiidd } })
        .then(() => {
            res.redirect('/admin/viewproject')
        })
=======
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
}