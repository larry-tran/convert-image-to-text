const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, "61b97df64e3280002f16a33c.jpg");
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype == "image/png" || file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    //reject file
    cb({ message: "Unsupported file format" }, false);
  }
};
const upload = multer({
  storage: storage,
  Limits: { filesize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});
module.exports = upload;