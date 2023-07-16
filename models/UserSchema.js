const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name!"],
  },
  email: {
    type: String,
    required: [true, "email is required!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
});

module.exports = mongoose.model("User", UserSchema);
