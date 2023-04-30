const mongoose = require("mongoose");
const BlockModel = require("./block-model");

const ParagraphBlockSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  { discriminatorKey: "type" }
);

const ParagraphBlockModel = BlockModel.discriminator(
  "ParagraphBlock",
  ParagraphBlockSchema
);

module.exports = ParagraphBlockModel;
