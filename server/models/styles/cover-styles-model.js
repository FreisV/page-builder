const mongoose = require("mongoose");
const StylesModel = require("./styles-model");

const CoverStylesSchema = new mongoose.Schema(
  {
    minHeight: {
      type: String,
      default: "700px",
    },
    backgroundImage: {
      type: String,
      required: true,
      default: "backgroundImage.jpg",
    },
    titleColor: {
      type: String,
      required: true,
      default: "#ffffff",
    },
    titleAlign: {
      type: String,
      required: true,
      default: "left",
    },
    subtitleColor: {
      type: String,
      required: true,
      default: "#ffffff",
    },
    subtitleAlign: {
      type: String,
      required: true,
      default: "left",
    },
    descriptionColor: {
      type: String,
      required: true,
      default: "#ffffff",
    },
    descriptionAlign: {
      type: String,
      required: true,
      default: "left",
    },
  },
  { discriminatorKey: "type" }
);

const CoverStylesModel = StylesModel.discriminator(
  "CoverStyles",
  CoverStylesSchema
);

module.exports = CoverStylesModel;
