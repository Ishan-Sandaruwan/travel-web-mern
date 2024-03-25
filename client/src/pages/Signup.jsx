import React from "react";
import { Button, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(signup.jpg)",
      }}
      className="w-full min-h-[94vh] bg-center bg-cover flex justify-center items-center "
    >
      <div className="text-white p-6 border-2 border-white rounded-md max-w-4xl flex flex-col gap-8 m-6">
        <h1 className="font-bold text-3xl text-center drop-shadow-md">
          Join with us to unlock the best Travel Guider in{" "}
          <span className="text-lime-400 text-4xl block">Sri Lanka</span>
        </h1>
        <form className="flex max-w-md flex-col gap-4 ">
          <div className="row flex justify-between gap-4">
            <div className="inp flex-1">
              <label htmlFor="fname" className="drop-shadow-md">
                First Name
              </label>
              <TextInput id="fname" type="text" placeholder="saman" required />
            </div>
            <div className="inp flex-1">
              <label htmlFor="lname" className="drop-shadow-md">
                Last Name
              </label>
              <TextInput id="lname" type="text" placeholder="kumara" required />
            </div>
          </div>
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
            <div className="inp">
              <label htmlFor="re-password" className="drop-shadow-md">
                Repeat password
              </label>
              <TextInput
                id="re-password"
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
              Join Now
            </Button>
          </div>
        </form>
        <div className="text-center">
          <hr />
          <h3 className="font-semibold">Already a member?</h3>
          <p>
            <span className="font-semibold underline">
              <Link to="/signin">Sign in</Link>
            </span>{" "}
            in using your TravelGuider account.
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
