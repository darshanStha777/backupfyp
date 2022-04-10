const db = require('../../models')
const MessageModel = db.addmessage

exports.getmessagepage = async(req, res, next) => {
    const messagedetails = await MessageModel.findAll({})
    console.log(messagedetails)

    res.render('admin/message', { messagedetails })
}