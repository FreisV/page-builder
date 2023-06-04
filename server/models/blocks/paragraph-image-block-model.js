const mongoose = require("mongoose");
const BlockModel = require("./block-model");

const ParagraphImageBlockSchema = new mongoose.Schema(
  {
    subtitle: {
      type: String,
      required: true,
      default: "Подзаголовок",
    },
    text: {
      type: String,
      required: true,
      default:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in",
    },
    filename: {
      type: String,
      required: true,
      default: "image.jpg",
    },
  },
  { discriminatorKey: "type" }
);

const ParagraphImageBlockModel = BlockModel.discriminator(
  "ParagraphImageBlock",
  ParagraphImageBlockSchema
);

module.exports = ParagraphImageBlockModel;
