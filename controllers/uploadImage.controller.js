const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

const uploadImage = async (req, res) => {
  try {
    const file = req.file;
    const formData = new FormData();
    formData.append(
      "photo",
      fs.createReadStream(file.path)
    );

    const resp = await axios({
      method: "post",
      url: "https://blackboxapp.co/getsingleimage",
      headers: { ...formData.getHeaders() },
      data: formData,
    })

    return res.status(200).json({ text: resp.data.text })
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
