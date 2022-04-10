const db = require('../../models')
const AddNewClient = db.addnewclient
const Projectmodel = db.proejct
const Teamproject = db.registernewTeamMember

const { mail } = require('../../middleware/mail')

exports.getaddprojectpage = async(req, res, next) => {
    const clinetdetails = await AddNewClient.findAll({})
    console.log(clinetdetails)
    res.render('admin/addproject.ejs', { clinetdetails, projectMessage: false });
}


exports.getviewprojectpage = async(req, res, next) => {
    const allproject = await Projectmodel.findAll({})
    res.render('admin/viewproject.ejs', { allproject });
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

    }
    const newproject = await Projectmodel.create(newprojectdetails)
    console.log("project Added")
    res.redirect('/admin/addproject')
}



exports.assignprojectpage = async(req, res, next) => {
    const ruser = await req.params.id
    console.log(ruser)
    const allteammember = await Teamproject.findAll({})
    res.render('admin/assignproject', { ruser, allteammember });
    console.log(allteammember)
}
exports.postassignprojectpage = async(req, res, next) => {
    const ruser = await req.params.id
    console.log(ruser)
    const requestteamid = await req.body.teamId
    console.log(requestteamid)
    let pdwithteam = {
        teamId: requestteamid
    }
    const projectassigned = await Projectmodel.update(pdwithteam, { where: { id: ruser } })
    res.redirect('/admin/viewproject')
}