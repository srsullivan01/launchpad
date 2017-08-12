const express = require('express');
const Daily = require('../models/daily');
const router = express.Router();

router.get("/", (req,res) => {
  Daily.find().then(daily => {
    res.json(daily);
  })
});

router.get("/:id", (req,res) => {
  Daily.findById(req.params.id).then((daily) => {
    res.json(daily);
  });
});



module.exports = router;
