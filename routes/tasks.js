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

router.post("/api/add-tasks", createTask);

router.get("/api/all-tasks", getTasks);
router.get("/api/all-tasks/single-Task/:id", getTask);

router.put("/api/all-tasks/update/:id", updateTask);

router.delete("/api/all-tasks/delete/:id", deleteTask);

module.exports = router;
