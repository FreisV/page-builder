const mongoose = require("mongoose");

const StylesSchema = mongoose.Schema(
  {
    blockId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Block",
      required: true,
      immutable: true,
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
      immutable: true,
    },
    backgroundColor: { type: String, required: true, default: "white" },
    paddingTop: { type: String, required: true, default: "15px" },
    paddingBottom: { type: String, required: true, default: "15px" },
    type: { type: String, required: true, immutable: true },
  },
  { discriminatorKey: "type" }
);

const StylesModel = mongoose.model("Styles", StylesSchema);

module.exports = StylesModel;
