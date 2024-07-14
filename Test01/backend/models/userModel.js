const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// --------------------------------- Sign Up Function -------------------------------

userSchema.statics.signUp = async function (
  firstName,
  lastName,
  email,
  password
) {
  // Validate inputs
  if (!email || !password || !firstName || !lastName) {
    throw Error("All fields are required.");
  }

  if (
    !validator.isLength(firstName, { min: 2, max: 30 }) ||
    !validator.isLength(lastName, { min: 2, max: 30 })
  ) {
    throw Error(
      "First name and last name must be between 2 and 30 characters long."
    );
  }

  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email address.");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password must be at least 8 characters long, contain at least one Uppercase letter, one Lowercase letter, Number, and Special Character."
    );
  }

  const isUserExist = await this.findOne({ email });

  if (isUserExist) {
    throw Error("Email already exists.");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = this.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  return newUser;
};

// --------------------------------- Sign In Function -------------------------------
userSchema.statics.signIn = async function (email, password) {
  // Validate inputs
  if (!email || !password) {
    throw Error("Email and Password are required.");
  }

  const isUserExist = await this.findOne({ email });
  if (!isUserExist) {
    throw Error("User does not exists.");
  }

  const matched = await bcrypt.compare(password, isUserExist.password);

  if (!matched) {
    throw Error("Invalid Password.");
  }

  return isUserExist;
};

module.exports = mongoose.model("User", userSchema);
