import { HiMail } from "react-icons/hi";
import React, { useState } from "react";
import { Button, TextInput,Spinner } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { signinStart, signinSuccess ,signinFailure } from '../redux/user/userSlice.js'


export default function Signin() {
  const dispatch = useDispatch();
  const {error,loading} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validate
    var emailPat = /\S+@\S+\.\S+/;
    if (!emailPat.test(data.email)) {
      return dispatch(signinFailure('invalid email address '));
    }
    console.log(data);
    try {
      dispatch(signinStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const data2 = await res.json();
      if (data2.success == false) {
        return dispatch(signinFailure(data2.message));
      } else {
        dispatch(signinSuccess(data2));
        navigate("/Home");
      }
    } catch (error) {
      dispatch(signinFailure(error.message));
    }
  };
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
        <form
          className="flex max-w-md flex-col gap-4 w-full"
          onSubmit={handleSubmit}
        >
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
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="inp">
              <label htmlFor="password" className="drop-shadow-md">
                Password
              </label>
              <TextInput
                id="password"
                type="password"
                required
                placeholder="**********"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row flex flex-col gap-2">
            <Button
              gradientMonochrome="lime"
              className="w-full text-green-700"
              size="lg"
              type="submit"
            >
              {loading == true ? (
                <>
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign in"
              )}
            </Button>
            {error && (
              <span className="text-red-600 text-sm font-semibold ">
                {error}
              </span>
            )}
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
