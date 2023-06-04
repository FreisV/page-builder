const mongoose = require("mongoose");
const StylesModel = require("./styles-model");

const TitleStylesSchema = new mongoose.Schema(
  {
    titleColor: {
      type: String,
      required: true,
      default: "#000000",
    },
    titleAlign: {
      type: String,
      required: true,
      default: "center",
    },
    subtitleColor: {
      type: String,
      required: true,
      default: "#000000",
    },
    subtitleAlign: {
      type: String,
      required: true,
      default: "center",
    },
    descriptionColor: {
      type: String,
      required: true,
      default: "#000000",
    },
    descriptionAlign: {
      type: String,
      required: true,
      default: "center",
    },
  },
  { discriminatorKey: "type" }
);

const TitleStylesModel = StylesModel.discriminator(
  "TitleStyles",
  TitleStylesSchema
);

module.exports = TitleStylesModel;
