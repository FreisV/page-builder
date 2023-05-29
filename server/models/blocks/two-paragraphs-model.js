const mongoose = require("mongoose");
const BlockModel = require("./block-model");

const TwoParagraphsBlockSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      default:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in",
    },
    text2: {
      type: String,
      required: true,
      default:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in",
    }
  },
  { discriminatorKey: "type" }
);

const TwoParagraphsBlockModel = BlockModel.discriminator(
  "TwoParagraphsBlock",
  TwoParagraphsBlockSchema
);

module.exports = TwoParagraphsBlockModel;