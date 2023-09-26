const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./models/Task");
const tasksRoutes = require("./routes/tasks");

const app = express();
mongoose.connect(process.env.MONGODB_URI);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", tasksRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.all("*", (req, res) => {
  res.status(400).json("Page introuvable");
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
