import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
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
    return next(errorHandler(400,"All fields are required"))
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
