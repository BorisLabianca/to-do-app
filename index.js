const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started On Port ${process.env.PORT}`);
});
