const router = require("express").Router();
const path = require("path");
const appDir = path.dirname(require.main.filename);

router.get("/imagetotext", (req, res) => {
  res.sendFile(path.join(appDir, "pages/ConvertImageToText.html"));
});

module.exports = router;
