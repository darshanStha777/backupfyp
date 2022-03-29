exports.getaddprojectpage = (req, res, next) => {
    res.render('admin/addproject.ejs', { projectMessage: false });
}


exports.getviewprojectpage = (req, res, next) => {
    res.render('admin/viewproject.ejs', {});
}