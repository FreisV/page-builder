const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true, min: 3, max: 32 },
  email: { type: String, unique: true, required: true, max: 50 },
  password: { type: String, required: true},
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

module.exports = model("User", UserSchema);
