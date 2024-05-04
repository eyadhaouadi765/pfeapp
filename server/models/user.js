const mongoose = require("mongoose");
const schema = mongoose.Schema;

const coursSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default:"participant"
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  isActivated: { type: Boolean, default: false },
  activationToken: { type: String },
});

const User = mongoose.model("User", coursSchema);
module.exports = User;
