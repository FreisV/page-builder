const mongoose = require("mongoose");
const BlockModel = require("./block-model");

const ButtonBlockSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    link: { type: String, required: true },
    download: { type: Boolean, default: false },
  },
  { discriminatorKey: "type" }
);

const ButtonBlockModel = BlockModel.discriminator(
  "ButtonBlock",
  ButtonBlockSchema
);

module.exports = ButtonBlockModel;
