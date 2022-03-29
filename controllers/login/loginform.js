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
        res.render("client/index")
        return
    } else {
        const userdetails = await req.user
        console.log(userdetails)
        res.render("employee/index", { userdetails })
        return
    }
}