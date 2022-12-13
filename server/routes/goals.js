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
  console.log("NEW GOAL ID: ", req.body.goalId);
  const goal = new Goal({
    goalId: req.body.goalId,
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

router.put("/:goalId", (req, res, next) => {
  Goal.findOne({ id: req.params.goalId })
    .then((goal) => {
      (goal.name = req.body.name),
        (goal.startDate = req.body.startDate),
        (goal.endDate = req.body.endDate),
        (goal.details = req.body.details);

      Goal.updateOne({ id: req.params.goalId }, goal)
        .then((result) => {
          res.status(204).json({
            message: "Goal updated successfully!",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Goal not found",
        error: { goal: "Goal not found" },
      });
    });
});

router.delete("/:goalId", (req, res, next) => {
  Goal.findOne({ id: req.params.goalId })
    .then((goal) => {
      Goal.deleteOne({ id: req.params.id })
        .then((result) => {
          res.status(204).json({
            message: "Goal deleted successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Goal not found",
        error: { goal: "Goal not found" },
      });
    });
});

module.exports = router;
