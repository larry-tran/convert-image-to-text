const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
const tesseract = require("tesseract.js");

const uploadImage = async (req, res) => {
  try {
    const file = req.file;
    const formData = new FormData();
    const newFileName = generateNewFileName(file.originalname);

    formData.append(
      "photo",
      fs.createReadStream(file.path),
      { filename: newFileName } // Set the new filename here
    );

    const resp = await axios({
      method: "post",
      url: "https://blackboxapp.co/getsingleimage",
      headers: { ...formData.getHeaders() },
      data: formData,
    })

    console.log(resp.data);
    return res.status(200).json({ text: resp.data.text })
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const generateUUID = () => {
	var d = new Date().getTime(); //Timestamp
	if(typeof performance!== 'undefined' && typeof performance.now === 'function'){
		d += performance.now(); //use high-precision timer if available
	}
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c == 'x'? r : (r & 0x3 | 0x8)).toString(16);
	});

}

const generateNewFileName = (originalFileName) => {
  // Example: appending timestamp to the filename
  const UUID = generateUUID();
  const extension = originalFileName.split('.').pop();
  return `${UUID}.${extension}`;
};

const uploadImageByTesseract = async (req, res) => {
  try {
    const file = req.file;
    const { data: { text } } = await tesseract
    .recognize(file.path, "vie")
    return res.status(200).json({ text })
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
  uploadImageByTesseract
};
