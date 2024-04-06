const User = require("../models/user.model");
const bcryptjs = require('bcryptjs');
const errorHandler = require('../middlewares/error');

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
   next(errorHandler(400, 'All fields are required!'));
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
    next(error);
  }
};

module.exports = signup;
