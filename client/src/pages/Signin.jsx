import React from "react";
import { Button, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(signin.jpg)",
      }}
      className="w-full min-h-[94vh] bg-center bg-cover flex justify-center items-center"
    >
      <div className="text-white p-6 border-2 border-white rounded-md max-w-4xl flex flex-col gap-8 m-6 items-center">
        <h1 className="font-bold text-3xl text-center drop-shadow-md">
          Sign in to unlock the best Travel Guider in{" "}
          <span className="text-lime-400 text-4xl block">Sri Lanka</span>
          <span className="float-left text-2xl">Welcome back.</span> 
        </h1>
        <form className="flex max-w-md flex-col gap-4 w-full">
          <div className="row">
            <div className="inp">
              <label htmlFor="email" className="drop-shadow-md">
                Email
              </label>
              <TextInput
                id="email"
                type="emai"
                placeholder="name@email.com"
                rightIcon={HiMail}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="inp">
              <label htmlFor="password" className="drop-shadow-md">
                Create Password
              </label>
              <TextInput
                id="password"
                type="password"
                required
                placeholder="**********"
              />
            </div>
          </div>

          <div className="row">
            <Button
              gradientMonochrome="lime"
              className="w-full text-green-700"
              size="lg"
            >
              Sign in
            </Button>
          </div>
        </form>
        <div className="text-center">
          <hr />
          <h3 className="font-semibold">Not a member?</h3>
          <p>
            <span className="font-semibold underline">
              <Link to="/signup">Join </Link>
            </span>{" "}
            to unlock best of Travel Guider
          </p>
          <p>
            By proceeding, you agree to our Terms of Use and confirm you have
            read our Privacy and Cookie Statement.
          </p>
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
}
