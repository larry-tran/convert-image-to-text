const router = require("express").Router();
const path = require("path");
const noteModel = require ("../models/note.model")
const appDir = path.dirname(require.main.filename);

router.get("/imagetotext", (req, res) => {
  res.sendFile(path.join(appDir, "pages/ConvertImageToText.html"));
});

// router.get("/mergeparagraph", (req, res) => {
//   res.sendFile(path.join(appDir, "pages/MergeParagraph.html"));
// });

router.get("notes", (req, res) => {
  noteModel.find().then(data=>{
      res.json(data);
  }).catch(err=>{
      console.log(err);
  })
});

module.exports = router;
