exports.getloginpage = (req, res, next) => {
    res.render('login/login', { loginMessage: false })
}
exports.postloginpage = async(req, res, next) => {
    const userType = await req.body.usertype
    if (userType === "admin") {
        console.log(req.user)
        res.redirect('admin/')
        return
    }
    if (userType === "client") {
        const clientdetails = await req.user
        console.log(req.user)
        res.redirect('client/');
        return
    } else {
        const userdetails = await req.user
        console.log(userdetails)
        res.redirect('team/')
        res.render("employee/assignedproject", { userdetails })
        return
    }
}