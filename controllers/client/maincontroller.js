const db = require('../../models')
const MessageModel = db.addmessage
const AddNewClient = db.addnewclient
const Projectmodel = db.proejct
const Teamproject = db.registernewTeamMember

exports.getindexpage = async(req, res, next) => {
    const clientdetails = await req.user

    res.render('clientpanel/index', { clientdetails })
}
let clientid
exports.getpaymentpage = async(req, res, next) => {
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
    res.render('clientpanel/paymentpage', { damount })
}

exports.getmessagepage = (req, res, next) => {
    res.render('clientpanel/message')
}



exports.postmessagepage = async(req, res, next) => {
    let messagedetails = {
        messageemail: req.body.messageemail,
        messagephone: req.body.messagephone,
        message: req.body.message,

    }
    const mmodel = await MessageModel.create(messagedetails)
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
        headers: { 'Authorization': 'key test_secret_key_8126b8cc380546dca40a07b5612b18f0' }
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
    res.render('clientpanel/paymentpage', { damount })
    console.log("haha")
}