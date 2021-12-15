const router = require("express").Router();
const path = require("path");
const appDir = path.dirname(require.main.filename);

router.get("/imagetotext", (req, res) => {
  res.sendFile(path.join(appDir, "pages/ConvertImageToText.html"));
});

// router.get("/mergeparagraph", (req, res) => {
//   res.sendFile(path.join(appDir, "pages/MergeParagraph.html"));
// });

module.exports = router;
