import React, { useState } from "react";
import { Button } from "flowbite-react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Dropdown } from "flowbite-react";
import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";
import { Avatar } from "flowbite-react";
import { signOut } from "../redux/user/userSlice.js";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const links = ["Home", "Discover", "Trips", "Review", "More"];
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = async (e) => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOut());
        navigate("/Home");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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

        {currentUser != null ? (
          <div className="absolute right-14 md:static md:right-0">
            <Dropdown
              label={
                <Avatar
                  alt="User settings"
                  img={currentUser.profilePicture}
                  rounded
                />
              }
              style={{ backgroundColor: "transparent" }}
            >
              <Dropdown.Header>
                <span className="block text-sm">{currentUser.firstName}</span>
                <span className="block truncate text-sm font-medium">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item icon={HiViewGrid} onClick={()=>navigate('/dashboard')}>Dashboard</Dropdown.Item>
              {/* <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item> */}
              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout} onClick={handleSignOut}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          </div>
        ) : (
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
        )}

        <HiBars3BottomRight
          className={`md:hidden inlin text-2xl  ${
            clicked && "transition-transform rotate-180"
          }`}
          onClick={() => setClicked(!clicked)}
        />

        {/* mobile view menu bar */}
        {clicked && (
          <div className="-translate-x-2 z-10  absolute flex flex-col text-white top-16 w-full shadow-lg shadow-emerald-300 ">
            {links.map((link, index) => (
              <span
                key={index}
                className={`w-full border-b-2 text-center border-white bg-emerald-800 z-10 h-8 hover:bg-emerald-600 transition-transform ${
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
