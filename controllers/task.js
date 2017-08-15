const express = require("express");
const Task = require("../models/task");
const router = express.Router();

router.get("/", (req, res) => {
  Task.find()
  .then((tasks) => {
    res.json(tasks);
  });
});

router.get('/:taskId', (req, res) => {
  Task.findById(req.params.taskId)
  .then((task) => {
    return res.json(task);
  });
});

router.post("/:dailyId/new", (req, res) => {
  console.log(req.params.dailyId + 'post route hit')
  const newTask = new Task()
    newTask.name = req.body.task.name,
    newTask.details = req.body.task.details,
    newTask.time = req.body.task.time

    newTask.save().then((task) => {
      return res.json(task)
    });
  });





// router.put('/:taskId', (req, res) => {
//   Task.findByIdAndUpdate(req.params.taskId, {
//     name: req.body.name.
//     details: req.body.details,
//     time: req.body.time
//   })
//   .then((task) => {
//     return res.json(task);
//   });
// });


//delete
router.delete('/:taskId', (req, res) => {
  Task.findByIdAndRemove(req.params.taskId)
  .then((task) => {
    return res.json({
      message: 'task deleted'
    });
  });
});
module.exports = router;
