const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
}).then(() => console.log("connect to DB"))

const PORT = 8000;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))