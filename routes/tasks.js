const express = require("express");
const Task = require("../models/Task");
const { createTask, getTasks } = require("../controllers/tasks");
const router = express.Router();

router.post("/api/add-tasks", createTask);

router.get("/api/all-tasks", getTasks);

module.exports = router;