const mongoose = require("mongoose");
const StylesModel = require("./styles-model");

const TeamStylesSchema = new mongoose.Schema(
  {
    nameColor: {
      type: String,
      required: true,
      default: "#000000",
    },
    nameAlign: {
      type: String,
      required: true,
      default: "left",
    },
    infoColor: {
      type: String,
      required: true,
      default: "#000000",
    },
    infoAlign: {
      type: String,
      required: true,
      default: "left",
    },
  },
  { discriminatorKey: "type" }
);

const TeamStylesModel = StylesModel.discriminator(
  "TeamStyles",
  TeamStylesSchema
);

module.exports = TeamStylesModel;
