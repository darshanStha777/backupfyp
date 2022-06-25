const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: './public/src/clientreuirement/',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
        // `${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const clientre = multer({
    storage: storage
})

module.exports = clientre;