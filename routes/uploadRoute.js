const router = require("express").Router();
const fs = require("fs");
const { uploadImage } = require("..//middlewares/upload");
const {
  uploadImageController,
} = require("..//controllers/uploadImage.controller");

router.post("/upload", uploadImage, uploadImageController.uploadImage);

router.get("/upload", (req, res) => {
  res.status(200).json("testing api");
});

module.exports = router;
