const fs = require("fs");
const tesseract = require("tesseract.js");

const uploadImage = async (req, res) => {
  try {
    const { language } = req.body;
    const file = req.files.file;

    await tesseract
      .recognize(file.tempFilePath, language, { logger: (e) => console.log(e) })
      .then((out) => {
        console.log(out.data.hocr);
        removeTmp(file.tempFilePath);
        return res.status(200).json({ msg: "Success", content: out.data.text });
      });

    // removeTmp(file.tempFilePath);
    return res.status(400).json({ msg: "Tesseract does not response" });
  } catch (error) {
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
