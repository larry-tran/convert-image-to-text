const cors = require("cors");
const fileUpload = require("express-fileupload");
const express = require("express");
const uploadRoute = require("./routes/uploadRoute");

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
app.use(fileUpload({ useTempFiles: true }));

app.use("/api", uploadRoute);

app.listen(PORT, () => console.log(`Server is ready at ${PORT}`));

