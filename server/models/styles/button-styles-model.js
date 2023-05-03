const mongoose = require("mongoose");
const StylesModel = require("./styles-model");

const ButtonStylesSchema = new mongoose.Schema(
  {
    color: {
      type: String,
      required: true,
      default: "white",
    },
    buttonBackgroundColor: {
      type: String,
      required: true,
      default: "black",
    },
    buttonBorderColor: {
      type: String,
      required: true,
      default: "black",
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
