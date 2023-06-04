const mongoose = require("mongoose");
const BlockModel = require("./block-model");

const CoverBlockSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "Добро пожаловать на сайт",
    },
    subtitle: {
      type: String,
      required: true,
      default: "Подзаголовок",
    },
    description: {
      type: String,
      required: true,
      default:
        "Уважаемый пользователь, хотим поприветствовать тебя на нашем сайте, надеемся ты найдёшь тут всю необходимую тебе информацию.",
    },
  },
  { discriminatorKey: "type" }
);

const CoverBlockModel = BlockModel.discriminator(
  "CoverBlock",
  CoverBlockSchema
);

module.exports = CoverBlockModel;
