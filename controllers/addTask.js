import React, { Component } from "react";
import axios from "axios";
import QuestionInput from "./QuestionInput";

router.get("/", (req,res) => {
  Daily.find().then(daily => {
    res.json(daily);
  })
});

router.post("/", (req, res) => {
  const Daily = new Daily();
  newDaily.name = req.body.daily.name;

  const newTasks = req.body.daily.tasks.map((task) => {
    return new Task(category);
  });
  newDaily.tasks = newTasks;

  newDaily.save().then((daily) => {
    res.json(daily);
  }).catch(err => console.log(err));
})

module.exports = router;
