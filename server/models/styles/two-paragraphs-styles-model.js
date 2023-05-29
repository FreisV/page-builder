const mongoose = require("mongoose");
const StylesModel = require("./styles-model");

const TwoParagraphsStylesSchema = new mongoose.Schema(
  {
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
    color2: {
      type: String,
      required: true,
      default: "#000000",
    },
    textAlign2: {
      type: String,
      required: true,
      default: "left",
    },
  },
  { discriminatorKey: "type" }
);

const TwoParagraphsStylesModel = StylesModel.discriminator(
  "TwoParagraphsStyles",
  TwoParagraphsStylesSchema
);

module.exports = TwoParagraphsStylesModel;
