const db = require('../../models')
const MessageModel = db.addmessage
const AddNewClient = db.addnewclient
const Projectmodel = db.proejct
const Teamproject = db.registernewTeamMember

exports.getindexpage = async(req, res, next) => {
    const clientdetails = await req.user

<<<<<<< HEAD

    let clientidd = clientdetails.dataValues.id

    const projectdetails = await Projectmodel.findAll({
        include: AddNewClient,
        where: { clientId: clientidd }
    })


    res.render('clientpanel/index', { projectdetails, clientdetails })
=======
    res.render('clientpanel/index', { clientdetails })
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
}
let clientid
exports.getpaymentpage = async(req, res, next) => {
    // const projectdetails = await Projectmodel.findAll({})
    // console.log(projectdetails)
    const clientd = await req.user
<<<<<<< HEAD

    // console.log("id" + clientd.dataValues.id)
    // let clientidd;
    // for (var i = 0; i < clientd.length; i++) {
    //     clientidd = clientd[i].id
    // }
    // console.log(clientidd)
    let clientName = clientd.dataValues.clientName

=======
        // console.log("id" + clientd.dataValues.id)
        // let clientidd;
        // for (var i = 0; i < clientd.length; i++) {
        //     clientidd = clientd[i].id
        // }
        // console.log(clientidd)
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
    clientid = clientd.dataValues.id
    const projectdetails = await Projectmodel.findAll({
            include: AddNewClient,
            where: { id: clientid }
        })
        //  console.log(projectdetails)
<<<<<<< HEAD
    console.log("haha", projectdetails)
=======
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
    let damount;
    for (i = 0; i < projectdetails.length; i++) {
        damount = projectdetails[i].pricedue
    }
<<<<<<< HEAD
    console.log("due amount", damount)
    res.render('clientpanel/paymentpage', { damount, clientd, clientName })
}

exports.getmessagepage = async(req, res, next) => {
    const clientdetails = await req.user
    let clientName = clientdetails.dataValues.clientName

    res.render('clientpanel/message', { clientName, clientdetails })
=======
    console.log(damount)
    res.render('clientpanel/paymentpage', { damount })
}

exports.getmessagepage = (req, res, next) => {
    res.render('clientpanel/message')
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
}



exports.postmessagepage = async(req, res, next) => {
<<<<<<< HEAD
    const clientdetails = await req.user
    let clientid = await req.user.id
    let messagedetails = {

        messagetopic: req.body.messagetopic,
        messagedescription: req.body.messagedescription,

    }
    const mmodel = await AddNewClient.update(messagedetails, { where: { id: clientid } })
=======
    let messagedetails = {
        messageemail: req.body.messageemail,
        messagephone: req.body.messagephone,
        message: req.body.message,

    }
    const mmodel = await MessageModel.create(messagedetails)
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
    console.log("clinet message created")
    res.redirect('/client/message')

}

const axios = require('axios');


exports.paymentcontroller = (req, res, next) => {



    let data = {

        "token": req.body.token,
        "amount": 1000
    };

    let config = {
<<<<<<< HEAD
        headers: { 'Authorization': 'key test_secret_key_44d80ca776a4446a8eb0fbd97c44624c' }
=======
        headers: { 'Authorization': 'key test_secret_key_8126b8cc380546dca40a07b5612b18f0' }
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
    };
    let allvallue
    axios.post("https://khalti.com/api/v2/payment/verify/", data, config)
        .then(response => {
            console.log("messge start")
            console.log(response.data)
            let alldatasabc = response.data
            allvallue = alldatasabc
            console.log("message complete");
            let details = {
                pricedue: '0',
            }
            const updatedueprice = Projectmodel.update(details, { where: { id: clientid } })
            res.redirect('/client/khalti/storepayment')
        })
        .catch(error => {
            console.log(error);
        })
    console.log(allvallue)
        // try {
        //     console.log(req.body)
        // } catch (err) {
        //     console.error("error occurea" + err)
        // }
}
exports.storepayment = async(req, res, next) => {
<<<<<<< HEAD

=======
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
    // const projectdetails = await Projectmodel.findAll({})
    // console.log(projectdetails)
    const clientd = await req.user
        // console.log("id" + clientd.dataValues.id)
        // let clientidd;
        // for (var i = 0; i < clientd.length; i++) {
        //     clientidd = clientd[i].id
        // }
        // console.log(clientidd)
    clientid = clientd.dataValues.id
    const projectdetails = await Projectmodel.findAll({
            include: AddNewClient,
            where: { id: clientid }
        })
        //  console.log(projectdetails)
    let damount;
    for (i = 0; i < projectdetails.length; i++) {
        damount = projectdetails[i].pricedue
    }
    console.log(damount)
<<<<<<< HEAD
    res.render('clientpanel/paymentpage', { damount, clientd })
    console.log("haha")
}
exports.getclientprofile = async(req, res, next) => {
    const clientdetails = await req.user;

    let clientId = clientdetails.dataValues.id
    let clientName = clientdetails.dataValues.clientName
    let clientAddress = clientdetails.dataValues.clientAddress
    let clientEmail = clientdetails.dataValues.email
    let clientPhone = clientdetails.dataValues.clientPhone
    let clientGender = clientdetails.dataValues.clientgender

    console.log("clietdetails" + clientdetails)
    res.render('clientpanel/clientprofile', { clientdetails })
}
exports.getprofiledata = async(req, res, next) => {
    const clientdetails = await req.user;
    let clientName = clientdetails.dataValues.clientName
    let reqid = req.params.id
    const reqclientd = await AddNewClient.findOne({ where: { id: reqid } })
    console.log("data" + reqclientd)
    res.render('clientpanel/editclientprofile', { clientName, clientdetails, reqclientd })
}
exports.postupdateprofiledata = async(req, res, next) => {
    const reqclientid = req.params.id
    const newclientdetails = {
        clientName: req.body.clientName,
        clientAddress: req.body.clientAddress,
        email: req.body.email,
        clientPhone: req.body.clientPhone,
        clientgender: req.body.clientgender,
        password: req.body.clientpassword,
    }
    const updatedate = AddNewClient.update(newclientdetails, { where: { id: reqclientid } })
    res.redirect('/client/profile')
=======
    res.render('clientpanel/paymentpage', { damount })
    console.log("haha")
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
}