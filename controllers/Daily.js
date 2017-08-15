const express = require('express');
const Daily = require('../models/daily');
const router = express.Router();

router.get("/", (req,res) => {
  Daily.find().then(daily => {
    res.json(daily);
  })
});

router.get("/:id", (req, res) => {
  console.log('post route hit')
  Daily.findById(req.params.id).then(daily => {
    console.log(daily)
    res.json(daily);
  })
});

router.post("/", (req, res) => {
  const newDaily = new Daily();
  newDaily.name = req.body.daily.name;

  const newTasks = req.body.daily.tasks.map((task) => {
    return new Task(daily);
  });
  newDaily.tasks = newTasks;

  newDaily.save().then((daily) => {
    res.json(daily);
  }).catch(err => console.log(err));
})

module.exports = router;
