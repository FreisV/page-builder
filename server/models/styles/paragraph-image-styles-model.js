const mongoose = require("mongoose");
const StylesModel = require("./styles-model");

const ParagraphImageStylesSchema = new mongoose.Schema(
  {
    subtitleColor: {
      type: String,
      required: true,
      default: "#000000",
    },
    subtitleAlign: {
      type: String,
      required: true,
      default: "left",
    },
    color: {
      type: String,
      required: true,
      default: "#000000",
    },
    textAlign: {
      type: String,
      required: true,
      default: "left",
    },
    maxHeight: {
      type: String,
      default: "",
    },
  },
  { discriminatorKey: "type" }
);

const ParagraphImageStylesModel = StylesModel.discriminator(
  "ParagraphImageStyles",
  ParagraphImageStylesSchema
);

module.exports = ParagraphImageStylesModel;
