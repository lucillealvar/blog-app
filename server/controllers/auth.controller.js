const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../middleware/error");
const jwt = require("jsonwebtoken");

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
    next(errorHandler(400, "All fields are required!"));
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

//Login function to handle user signin
const login = async (req, res, next) => {
  const { email, password } = req.body;

  //error to handle missing fields
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }
  try {
    //finding user from database by email
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler(400, "User not found"));
    }

    //compare validuser password with hashed password
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      next(errorHandler(400, "Invalid email/password"));
    }

    //when validated create token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    //remove password from response
    const { password: pass, ...rest } = validUser._doc;
    res.status(200).cookie("token", token, { httpOnly: true }).json(rest);
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login };
