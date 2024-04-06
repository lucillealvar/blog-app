const User = require("../models/user.model");
const bcryptjs = require('bcryptjs');

//Signup function to handle registration
const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  //hash password
  const hashedPassword = bcryptjs.hashSync(password, 10);

  //add new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  //save new user into database
  try {
    await newUser.save();
    res.json("Signup successful!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = signup;
