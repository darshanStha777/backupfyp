const db = require('../../models')
<<<<<<< HEAD
const AddNewClient = db.addnewclient
const MessageModel = db.addmessage

exports.getmessagepage = async(req, res, next) => {
    const ruserdetails = await req.user
    const adminidd = await req.user.id
    const messagedetails = await AddNewClient.findAll({ where: { adminId: adminidd } })
    console.log(messagedetails)
    res.render('admin/message', { messagedetails, ruserdetails })
=======
const MessageModel = db.addmessage

exports.getmessagepage = async(req, res, next) => {
    const messagedetails = await MessageModel.findAll({})
    console.log(messagedetails)

    res.render('admin/message', { messagedetails })
>>>>>>> 79d70b95157309323b77f385cc63f455931fbaa1
}