const mongoose = require("mongoose");
const BlockModel = require("./block-model");

const ButtonBlockSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, default: "Нажми" },
    link: { type: String, required: true, default: "#" },
    download: { type: Boolean, required: true, default: false },
  },
  { discriminatorKey: "type" }
);

const ButtonBlockModel = BlockModel.discriminator(
  "ButtonBlock",
  ButtonBlockSchema
);

module.exports = ButtonBlockModel;
