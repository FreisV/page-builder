const mongoose = require("mongoose");
const StylesModel = require("./styles-model");

const ImageStylesSchema = new mongoose.Schema(
  {
    maxHeight: {
      type: String,
      default: "",
    }
  },
  { discriminatorKey: "type" }
);

const ImageStylesModel = StylesModel.discriminator(
  "ImageStyles",
  ImageStylesSchema
);

module.exports = ImageStylesModel;
