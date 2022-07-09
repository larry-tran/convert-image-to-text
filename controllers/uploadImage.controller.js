const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
const path = require('path');
const dirPath = path.resolve("./")
const filePath = path.join(dirPath, "/uploads")

const uploadImage = async (req, res) => {
  try {
    const file = req.file;
    console.log(filePath)
    console.log(file)
    const formData = new FormData();
    formData.append(`photo`, "D:\\AiLienDoc\\convert-image-to-text\\uploads\\61b74990df9c2e002f1b9498.jpg");
    await axios
      .post("https://blackboxapp.co/getsingleimage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    return res.status(400).json({ msg: "Tesseract does not response" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

exports.uploadImageController = {
  uploadImage,
};
