const db = require('../../models')
const AddNewClient = db.addnewclient
const { mail } = require('../../middleware/mail')


exports.getviewclientpage = async(req, res, next) => {
    const allclient = await AddNewClient.findAll({})
    console.log(allclient)
    res.render('admin/viewclient.ejs', { allclient });


}
exports.getaddclientpage = (req, res, next) => {
    res.render('admin/addclient.ejs', { newclient: false });
}

exports.postaddclientpage = async(req, res, next) => {
    try {
        const alreadyclient = await AddNewClient.findOne({ where: { clientEmail: req.body.clientEmail } })
        if (alreadyclient) {
            res.render('admin/addclient', { newclient: 'alreadyclient' })
        } else {
            const newclientdetails = {
                clientName: req.body.clientName,
                clientAddress: req.body.clientAddress,
                clientEmail: req.body.clientEmail,
                clientPhone: req.body.clientPhone,
                clientgender: req.body.clientgender,
                clientpassword: req.body.clientpassword,
            }
            const newclient = await AddNewClient.create(newclientdetails)
            try {
                let name = req.body.clientName
                let email = req.body.clientEmail
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
                res.render('admin/addclient', { newclient: 'newclient' })
                console.log("cleint added")
            } catch (err) {
                console.log(err);
            }

        }

    } catch (err) {
        console.log("error in add client", err)
    }
}