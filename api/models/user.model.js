import mongoose from "mongoose";

const userShema = new mongoose.Schema(
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
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    bg: {
      type: String,
      default: "https://images.hdqwalls.com/wallpapers/travel-hd.jpg",
    },
    city: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userShema);

export default User;
