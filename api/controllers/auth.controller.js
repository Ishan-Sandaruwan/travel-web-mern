import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
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
    return res.status(400).json({ message: "All fields are required" });
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
    res.status(500).json({ message: error.message });
  }
};
