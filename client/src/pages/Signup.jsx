import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Spinner } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validate
    var emailPat = /\S+@\S+\.\S+/;
    if (data.password !== data.rePassword) {
      return setError("password doesn't match");
    } else if (data.password.length < 6) {
      return setError("Password should be at least 6 characters long");
    } else if(!emailPat.test(data.email)){
      return setError("enter valid email address");
    }
    setError(null);
    const { rePassword: rePas, ...restData } = data;
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success == false) {
        setLoading(false);
        return setError(data.message);
      } else {
        setLoading(false);
        navigate("/signin");
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(signup.jpg)",
      }}
      className="w-full min-h-[94vh] bg-center bg-cover flex justify-center items-center "
    >
      <div className="p-6 border-2 border-white rounded-md max-w-4xl flex flex-col gap-8 m-6">
        <h1 className="font-bold text-3xl text-center drop-shadow-md text-white">
          Join with us to unlock the best Travel Guider in{" "}
          <span className="text-lime-400 text-4xl block">Sri Lanka</span>
        </h1>
        <form className="flex max-w-md flex-col gap-4 " onSubmit={handleSubmit}>
          <div className="row flex justify-between gap-4">
            <div className="inp flex-1">
              <label htmlFor="firstName" className="drop-shadow-md text-white">
                First Name
              </label>
              <TextInput
                id="firstName"
                type="text"
                placeholder="saman"
                required
                onChange={handleChange}
              />
            </div>
            <div className="inp flex-1">
              <label htmlFor="lastName" className="drop-shadow-md text-white">
                Last Name
              </label>
              <TextInput
                id="lastName"
                type="text"
                placeholder="kumara"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="inp">
              <label htmlFor="email" className="drop-shadow-md text-white">
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
              <label htmlFor="password" className="drop-shadow-md text-white">
                Create Password
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
          <div className="row">
            <div className="inp">
              <label htmlFor="rePassword" className="drop-shadow-md text-white">
                Repeat password
              </label>
              <TextInput
                id="rePassword"
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
                "Join Now"
              )}
            </Button>
            {error && <span className="text-red-600 text-sm font-semibold ">{error}</span> }
          </div>
        </form>
        <div className="text-center text-white">
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
