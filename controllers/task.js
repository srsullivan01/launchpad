const express = require("express");
const Task = require("../models/task");
const router = express.Router();

router.get("/", (req, res) => {
  Task.find().then((tasks) => {
    res.json(tasks);
  });
});

router.post("/", (req, res) => {
  const Task = new Task();
  newTask.name = req.body.task.name;
});


module.exports = router;
