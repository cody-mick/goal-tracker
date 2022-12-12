const express = require("express");
const router = express.Router();
const Goal = require("../models/goal");

router.get("/", (req, res, next) => {
  Goal.find({})
    .then((goals) => {
      res.status(200).json({
        message: "Goals fetched successfully!",
        goals: goals,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error has occurred",
        error: error,
      });
    });
});

router.post("/", (req, res, next) => {
  const goal = new Goal({
    goalId: 1,
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    details: req.body.details,
  });
  goal
    .save()
    .then((createdGoal) => {
      res.status(201).json({
        message: "Goal added successfully!",
        goal: createdGoal,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error has occurred",
        error: error,
      });
    });
});

module.exports = router;
