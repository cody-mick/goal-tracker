const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
  id: { type: String, required: true },
  dateStart: { type: Date },
  dateEnd: { type: Date },
  details: { type: String },
  name: { type: String },
});
