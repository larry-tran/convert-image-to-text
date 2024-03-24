const cors = require("cors");
const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const uploadRoute = require("./routes/uploadRoute");
const toolRoute = require("./routes/toolRoute");

const router = express.Router();

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(favicon(__dirname + "/public/www/favicon.ico"));

app.use("/api", uploadRoute);
app.use("/tool", toolRoute);

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on Port: 3000");
});

router.use(
    express.static(
      path.join(
        __dirname,
        process.env["base-dir"] ? process.env["base-dir"] : "./public/www"
      )
    )
  );
  
app.use("/", router);
module.exports = app;