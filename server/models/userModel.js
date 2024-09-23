const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "A usename is required"],
    unique: [true, "This username is already taken"],
    minlength: [3, "A username must be over 2 characters"],
    maxlength: [50, "A username must be under 50 characters"],
    match: [
      /^[a-zA-Z0-9_-]+$/,
      "Username can only contain letters, numbers, underscores, and hyphens",
    ],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  role: {
    type: String,
    enum: ["user", "author"],
    default: "user",
  },
});

userSchema.pre("save", function (next) {
  const authorEmail = "author@example.coom";
  if (this.email === authorEmail) {
    this.role = "author";
  } else {
    this.role = "user";
  }

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
