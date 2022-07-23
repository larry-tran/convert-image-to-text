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
const PORT = process.env.PORT || 5000;

// const mongoose = require("mongoose");
// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => console.log("DB is ready"))
//   .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(favicon(__dirname + "/public/www/favicon.ico"));

app.use("/api", uploadRoute);
app.use("/tool", toolRoute);

app.listen(PORT, () => console.log(`Server is ready at ${PORT}`));

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