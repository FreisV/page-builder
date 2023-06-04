const mongoose = require("mongoose");
const BlockModel = require("./block-model");

const SocialNetworksBlockSchema = new mongoose.Schema(
  {
    facebookLink: { type: String, required: true, default: "https://facebook.com" },
    vkLink: { type: String, required: true, default: "https://vk.com" },
    instagramLink: { type: String, required: true, default: "https://instagram.com" },
    telegramLink: { type: String, required: true, default: "https://facebook.com" },
  },
  { discriminatorKey: "type" }
);

const SocialNetworksBlockModel = BlockModel.discriminator(
  "SocialNetworksBlock",
  SocialNetworksBlockSchema
);

module.exports = SocialNetworksBlockModel;
