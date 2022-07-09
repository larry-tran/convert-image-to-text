const router = require("express").Router();
const fs = require("fs");
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

router.post(
  "/uploadTess",
  (req, res, next) => {
    uploadMulti(req, res, (err) => {
      if (err) return res.status(500).send({ mes: err });
      next();
    });
  },
  uploadImageController.uploadImageByTesseract
);

module.exports = router;
