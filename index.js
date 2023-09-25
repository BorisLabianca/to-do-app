const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(process.env.MONGODB_URI);

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`Server Started On Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
