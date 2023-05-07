const mongoose = require("mongoose");
const StylesModel = require("./styles-model");

const ButtonStylesSchema = new mongoose.Schema(
  {
    color: {
      type: String,
      required: true,
      default: "#FFFFFF",
    },
    buttonBackgroundColor: {
      type: String,
      required: true,
      default: "#000000",
    },
    buttonBorderColor: {
      type: String,
      required: true,
      default: "#000000",
    },
    buttonBorderWidth: {
      type: String,
      required: true,
      default: "3px",
    },
  },
  { discriminatorKey: "type" }
);

const ButtonStylesModel = StylesModel.discriminator(
  "ButtonStyles",
  ButtonStylesSchema
);

module.exports = ButtonStylesModel;
