const router = require("express").Router();
const fs = require("fs");
const tesseract = require("tesseract.js");
const upload = require("../middlewares/upload");
const {
  uploadImageController,
} = require("..//controllers/uploadImage.controller");

var uploadMulti = upload.single("photo");

router.post(
  "/upload",
  (req, res, next) => {
    uploadMulti(req, res, (err) => {
      if (err) return res.status(500).send({ mes: err });
      next();
    });
  },
  uploadImageController.uploadImage
);

router.get("/upload", (req, res) => {
  tesseract
    .recognize("./uploads/61b97df64e3280002f16a33c.jpg", "vie", {
      logger: (m) => console.log(m),
    })
    .then(({ data: { text } }) => {
      console.log(text);
      res.status(200).json(`testing api ${text}`);
    });
});

module.exports = router;
