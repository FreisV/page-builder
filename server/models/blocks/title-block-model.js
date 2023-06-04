const mongoose = require("mongoose");
const BlockModel = require("./block-model");

const TitleBlockSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Заголовок",
    },
    subtitle: {
      type: String,
      default: "Подзаголовок",
    },
    description: {
      type: String,
      default: "Красивое описание",
    },
  },
  { discriminatorKey: "type" }
);

const TitleBlockModel = BlockModel.discriminator(
  "TitleBlock",
  TitleBlockSchema
);

module.exports = TitleBlockModel;
