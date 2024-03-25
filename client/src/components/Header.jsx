import React, { useState } from "react";
import { Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Header() {
  const links = ["Home", "Discover", "Trips", "Review", "More"];
  const path = useLocation().pathname;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-emerald-400 border-b-2 border-green-600">
      <div className="mx-auto flex w-full h-14 justify-between items-center max-w-6xl px-2 relative">
        <span className="font-bold px-2 py-1 bg-gradient-to-r from-green-500 to-teal-400 rounded-lg text-white text-xl cursor-default">
          TravelGuider
        </span>
        <div className="hidden md:flex gap-8 items-center ">
          {links.map((link, index) => (
            <span
              key={index}
              className={
                path === "/" + link
                  ? "font-bold scale-110 text-green-600 cursor-default"
                  : "cursor-pointer hover:scale-110"
              }
            >
              <Link to={link}>{link}</Link>
            </span>
          ))}
        </div>
        <Button gradientDuoTone="greenToBlue" outline className="absolute right-14 md:static md:right-0">
          Sign in
          <PiSignInBold className="text-lg ml-2" />
        </Button>
        
        <HiBars3BottomRight
          className={`md:hidden inlin text-2xl ${clicked && 'transition-transform rotate-180'}`}
          onClick={() => setClicked(!clicked)}
        />




        {/* mobile view menu bar */}
        {clicked && (
          <div className="absolute flex flex-col gap-4 bg-emerald-400 top-16 w-full shadow-lg shadow-emerald-300">
            {links.map((link, index) => (
              <span
                key={index}
                className={`w-full border-b-2 text-center border-white ${
                  path === "/" + link ? "font-bold" : ""
                }`}
              >
                <Link to={link}>{link}</Link>
              </span>
            ))}
          </div>
        )}


      </div>
    </div>
  );
}
