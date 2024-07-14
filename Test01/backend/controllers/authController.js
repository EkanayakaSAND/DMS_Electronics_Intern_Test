const User = require("../models/userModel");
const { generateToken } = require("../utils/createJWT");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.signUp(firstName, lastName, email, password);
    const token = generateToken(user._id);
    res
      .status(201)
      .json({
        message: "User registered successfully",
        email,
        firstName,
        lastName,
        token,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.signIn(email, password);
    const token = generateToken(user._id);
    res.json({
      message: "User logged in successfully",
      email,
      firstName: user.firstName,
      lastName: user.lastName,
      token,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
