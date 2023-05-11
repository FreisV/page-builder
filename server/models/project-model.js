const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true, min: 1, max: 30 },
  isOpen: { type: Boolean, default: false },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model("Project", ProjectSchema);
