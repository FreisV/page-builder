const mongoose = require("mongoose");
const BlockModel = require("./block-model");

const ImageBlockSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
      default: "image.jpg",
    },
  },
  { discriminatorKey: "type" }
);

const ImageBlockModel = BlockModel.discriminator(
  "ImageBlock",
  ImageBlockSchema
);

module.exports = ImageBlockModel;
