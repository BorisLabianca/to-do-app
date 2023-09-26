const express = require("express");
const Task = require("../models/Task");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");
const router = express.Router();

// Routes
// Create
router.post("/add-tasks", createTask);

// Read
router.get("/all-tasks", getTasks);
router.get("/single-Task/:id", getTask);

// Update
router.put("/update/:id", updateTask);

// Delete
router.delete("/delete/:id", deleteTask);

module.exports = router;
