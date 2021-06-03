const multer = require('multer');

const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        callback(null, true);
    }
    else { callback(null, false); }
}

module.exports.upload = multer({
    fileFilter: fileFilter
});