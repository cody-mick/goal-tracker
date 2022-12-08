const express = require("express");
const router = express.Router();

/* GET Homepage */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "dist/goal-tracker/index.html"));
});

module.exports = router;
