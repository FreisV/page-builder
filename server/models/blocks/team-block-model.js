const mongoose = require("mongoose");
const BlockModel = require("./block-model");

const TeamBlockSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
      default: "person.jpg",
    },
    name: {
      type: String,
      required: true,
      default: "Иван Иванов",
    },
    info: { 
      type: String,
      required: true,
      default: "Наш директор",
    },
    filename2: {
      type: String,
      required: true,
      default: "person.jpg",
    },
    name2: {
      type: String,
      required: true,
      default: "Иван Иванов",
    },
    info2: {
      type: String,
      required: true,
      default: "Наш директор",
    },
    filename3: {
      type: String,
      required: true,
      default: "person.jpg",
    },
    name3: {
      type: String,
      required: true,
      default: "Иван Иванов",
    },
    info3: {
      type: String,
      required: true,
      default: "Наш директор",
    },
  },
  { discriminatorKey: "type" }
);

const TeamBlockModel = BlockModel.discriminator("TeamBlock", TeamBlockSchema);

module.exports = TeamBlockModel;
