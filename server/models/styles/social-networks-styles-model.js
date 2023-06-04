const mongoose = require("mongoose");
const StylesModel = require("./styles-model");

const SocialNetworksStylesSchema = new mongoose.Schema(
  {
  },
  { discriminatorKey: "type" }
);

const SocialNetworksStylesModel = StylesModel.discriminator(
  "SocialNetworksStyles",
  SocialNetworksStylesSchema
);

module.exports = SocialNetworksStylesModel;
