import React, { useState } from "react";
import { Button } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Header() {
  const links = ["Home", "Discover", "Trips", "Review", "More"];
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white border-b-2 border-green-600">
      <div className="mx-auto flex w-full h-16 justify-between items-center max-w-6xl px-2 relative">
        <span className="font-bold px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-white text-2xl cursor-default">
          TravelGuider
        </span>
        <div className="hidden md:flex gap-8 items-center ">
          {links.map((link, index) => (
            <span
              key={index}
              className={
                path === "/" + link
                  ? "font-bold scale-110 text-lime-500 cursor-default"
                  : "cursor-pointer hover:scale-110 drop-shadow text-lg font-semibold"
              }
            >
              <Link to={link}>{link}</Link>
            </span>
          ))}
        </div>
        <Button
          gradientDuoTone="greenToBlue"
          outline
          className="absolute right-14 md:static md:right-0"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign in
          <PiSignInBold className="text-lg ml-2" />
        </Button>

        <HiBars3BottomRight
          className={`md:hidden inlin text-2xl ${
            clicked && "transition-transform rotate-180"
          }`}
          onClick={() => setClicked(!clicked)}
        />

        {/* mobile view menu bar */}
        {clicked && (
          <div className="absolute flex flex-col text-white top-16 w-full shadow-lg shadow-emerald-300">
            {links.map((link, index) => (
              <span
                key={index}
                className={`w-full border-b-2 text-center border-white bg-emerald-500 h-8 hover:bg-emerald-600 transition-transform ${
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
