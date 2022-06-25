const db = require('../../models')
const AddNewClient = db.addnewclient
const MessageModel = db.addmessage

exports.getmessagepage = async(req, res, next) => {
    const ruserdetails = await req.user
    const adminidd = await req.user.id
    const messagedetails = await AddNewClient.findAll({ where: { adminId: adminidd } })
    console.log(messagedetails)
    res.render('admin/message', { messagedetails, ruserdetails })
}