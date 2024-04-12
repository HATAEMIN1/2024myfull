const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 4,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  createAt: Date,
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
