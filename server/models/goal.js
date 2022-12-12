const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
  // id: { type: String, required: true },
  startDate: { type: String },
  endDate: { type: String },
  details: { type: String },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Goal", goalSchema);
