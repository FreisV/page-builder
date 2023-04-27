const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  isOpen: { type: Boolean, default: false },
});

module.exports = model("Project", ProjectSchema);
