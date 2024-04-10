import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (
    !firstName ||
    firstName === "" ||
    !lastName ||
    lastName === "" ||
    !email ||
    email === "" ||
    !password ||
    password === ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  }

  const hashPass = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashPass,
  });
  try {
    await newUser.save();
    res.json({ message: "Signup successful" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || email === "" || !password || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(400, "User not found"));
    }
    if (!bcryptjs.compareSync(password, user.password)) {
      return next(errorHandler(400, "Password doesn't match"));
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_KEY
    );
    const { password: pass, ...rest } = user._doc;
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
