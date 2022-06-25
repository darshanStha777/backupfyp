const db = require('../../models')
const AddNewClient = db.addnewclient
const { mail } = require('../../middleware/mail')


exports.getviewclientpage = async(req, res, next) => {
    const reqestad = await req.user.dataValues.id
    const ruserdetails = await req.user
    const allclient = await AddNewClient.findAll({ where: { adminId: reqestad } })
    console.log(allclient)
    res.render('admin/viewclient.ejs', { allclient, ruserdetails });


}
let reqadminid;
exports.getaddclientpage = async(req, res, next) => {
    const ruserdetails = await req.user
    reqadminid = ruserdetails.dataValues.id
    console.log(req.user)
    res.render('admin/addclient.ejs', { newclient: false, ruserdetails });
}
exports.postaddclientpage = async(req, res, next) => {
    const ruserdetails = await req.user
    const managerName = await req.user.dataValues.fullname
    try {
        const alreadyclient = await AddNewClient.findOne({ where: { email: req.body.email } })
        if (alreadyclient) {
            res.render('admin/addclient', { newclient: 'alreadyclient', ruserdetails })
        } else {
            const newclientdetails = {
                clientName: req.body.clientName,
                clientAddress: req.body.clientAddress,
                email: req.body.email,
                clientPhone: req.body.clientPhone,
                clientgender: req.body.clientgender,
                password: req.body.clientpassword,
<<<<<<< HEAD
                adminId: reqadminid

=======
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
            }
            const newclient = await AddNewClient.create(newclientdetails)
            try {
                let name = req.body.clientName
                let email = req.body.email
                let password = req.body.clientpassword
                mail.sendMail({
                    from: 'myteamproject8@gmail.com',
                    to: email,
                    subject: 'Client Added.',
                    html: '<h1>Hello ' + name + '</h1><h3> Welcome to our System,</h3><hr><p>    We’ d like to confirm that your account was added successfully.To access your panel check login credentials ' +
                        ' <br><br>login details: <br>id: ' + email + '<br>password: ' +
                        password + '<br>To login please visit the route: /login and select usertype user. <br> Data shared hereby are company property. you are neither allowed to share or distribute or forward this Message. If any such cases are found then legal action are taken. <br>If you experience any issues logging into your account, reach out to us at myteamproject8@gmail.com  Best, The[customer portal] team < br > Thank You!'
                })
                console.log("mail has been send")
                console.log(" Register New Team Member")
                res.render('admin/addclient', { newclient: 'newclient', ruserdetails })
                console.log("cleint added")
            } catch (err) {
                console.log(err);
            }

        }

    } catch (err) {
        console.log("error in add client", err)
    }
}


exports.getclientdelete = async(req, res, next) => {
    const ruserdetails = await req.user
    let cliidd = req.params.id
    const clientdelete = AddNewClient.destroy({ where: { id: cliidd } })
        .then(() => {
            res.redirect("/admin/viewclient")
        })
}