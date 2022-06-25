const db = require('../../models')
const AddNewClient = db.addnewclient
const Projectmodel = db.proejct
const Teamproject = db.registernewTeamMember
const Admin = db.admin

exports.getregistrationpage = (req, res, next) => {
    res.render("registrationadmin/registation", { admint: false })
}
exports.postregistrationpage = async(req, res, next) => {
    const alladmin = await Admin.findOne({ where: { email: req.body.email } })
    if (alladmin) {

        console.log(alladmin)
        res.render("registrationadmin/registation", { admint: 'alreadyfind' })

    } else {
        const alladminphone = await Admin.findOne({
            where: {
                phonenumber: req.body.phonenumber
            }
        })
        if (alladminphone) {
            console.log(alladminphone)
            res.render("registrationadmin/registation", { admint: 'alreadyfind' })

        } else {
            let registrationadmin = {
                fullname: req.body.fullname,
                dob: req.body.dob,
                gender: req.body.gender,
                email: req.body.email,
                phonenumber: req.body.phonenumber,
                password: req.body.password
            }
            const createadmin = Admin.create(registrationadmin)
            console.log("success")
            res.render("registrationadmin/registation", { admint: 'nedadded' })


        }

    }
}