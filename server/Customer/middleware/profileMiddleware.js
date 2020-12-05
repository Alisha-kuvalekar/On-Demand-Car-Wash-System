const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./uploads/images');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({storage: storage,limits: {
    fileSize: 1024 * 1024 * 10
}});


module.exports = { upload };