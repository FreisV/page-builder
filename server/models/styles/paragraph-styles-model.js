const mongoose = require("mongoose");
const StylesModel = require("./styles-model");

const ParagraphStylesSchema = new mongoose.Schema(
  {
    color: {
      type: String,
      required: true,
      default: "white",
    },
    textAlign: {
      type: String,
      required: true,
      default: "left",
    },
  },
  { discriminatorKey: "type" }
);

const ParagraphStylesModel = StylesModel.discriminator(
  "ParagraphStyles",
  ParagraphStylesSchema
);

module.exports = ParagraphStylesModel;
