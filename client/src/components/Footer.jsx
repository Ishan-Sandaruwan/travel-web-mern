import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-emerald-300 to-lime-400 p-4">
      <div className="mb-4 flex justify-between gap-8 items-center">
        <span className="text-3xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-md shadow-md hover:to-lime-400 transition-transform cursor-pointer">
          Travel Guider
        </span>
        <div className="flex-grow font-semibold flex justify-evenly text-lime-800 drop-shadow text-lg">
          <span className="hover:translate-x-2 transition-transform cursor-pointer">
            About
          </span>
          <span className="hover:translate-x-2 transition-transform cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:translate-x-2 transition-transform cursor-pointer">
            Licensing
          </span>
          <span className="hover:translate-x-2 transition-transform cursor-pointer">
            Contact
          </span>
        </div>
      </div>
      <hr className="" />
      <div className="mt-4 flex justify-between items-center">
        <div className="text-lime-950 drop-shadow-lg text-xl font-semibold">
          © 2024 Travel Guider™
        </div>
        <div className="flex gap-8 items-center">
          <BsFacebook className="text-3xl hover:-translate-x-2 transition-transform cursor-pointer" />
          <BsYoutube className="text-3xl hover:-translate-x-2 transition-transform cursor-pointer" />
          <BsInstagram className="text-3xl hover:-translate-x-2 transition-transform cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
