const express = require('express');
const Daily = require('../models/daily');
const router = express.Router();

router.get("/", (req,res) => {
  Daily.find().then(tasks => {
    res.json(tasks);
  })
});

router.get("/:id", (req,res) => {
  Daily.findById(req.params.id).then((tasks) => {
    res.json(tasks);
  });
});



module.exports = router;
