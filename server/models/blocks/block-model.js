const mongoose = require("mongoose");

const BlockSchema = mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true, immutable: true },
  blockNumber: { type: Number, required: true },
  type: { type: String, required: true, immutable: true },
},  { discriminatorKey: "type" });

const BlockModel = mongoose.model("Block", BlockSchema);

module.exports = BlockModel;
