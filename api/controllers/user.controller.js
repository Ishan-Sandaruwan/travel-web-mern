import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signout = async (req, res, next) => {
  try {
    res.clearCookie("access_token").status(200).json("User has been signout");
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this user"));
  }
  if (req.body.password) {
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          city: req.body.city,
          about: req.body.about,
          profilePicture: req.body.profilePicture,
          bg: req.body.bg,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this user"));
  }
  try {
    const userData = await User.findById(req.params.userId);
    const isPasswordCorrect = bcryptjs.compareSync(req.body.cPass, userData.password);
    if (!isPasswordCorrect) {
      return next(errorHandler(401, "Password doesn't match"));
    }
    await User.findByIdAndDelete(req.params.userId);
    return res.status(200).json("User has been deleted");
    
  } catch (error) {
    next(error);
  }
};
