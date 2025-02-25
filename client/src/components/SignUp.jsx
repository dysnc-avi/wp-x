import React, { useState } from "react";

const Signup = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Internal Server Error");
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState({
    fullName: false,
    email: false,
    password: false,
  });
  const [inputType, setInputType] = useState("password");

  function checkInputs() {
    if (user.fullName != "" && user.email != "" && user.password != "") {
      return true;
    } else {
      Object.keys(user).forEach((key) => {
        if (user[key] == "") {
          setInputErrors((prevErrors) => ({ ...prevErrors, [key]: true }));
        }
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (checkInputs()) {
      console.log(user);
    }
  }

  return (
    <div className="flex md:w-screen h-lvh font-inter">
      <div className="bg-black w-1/3">s</div>
      {/* white space */}
      <div className="bg-white w-full h-full flex flex-col text-black">
        <div className="w-full h-fit p-5 flex justify-end ">
          <h1 className="font-semibold text-base">
            Already a user? <u className="text-blue-600">Log In</u>
          </h1>
        </div>
        {/* form and welcome */}
        <div className="flex w-full h-fit items-center flex-col">
          <h1 className="text-4xl font-extrabold">Welcome to wp-x</h1>
          <p className="font-light my-3 text-sm">
            Gameify your corporate workflow!
          </p>
        </div>
        {/* form */}
        <form
          className="mx-24 mt-5 flex flex-col gap-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full h-fit p-2 pl-4 bg-red-100 rounded-xl">
            <span className="text-red-600 text-sm">{errorMessage}</span>
          </div>
          <input
            type="text"
            className="border border-black rounded-lg pl-4 py-3 placeholder:text-sm"
            placeholder="Full Legal Name"
            onChange={(e) => {
              setUser({ ...user, fullName: e.target.value });
              if (inputErrors.fullName == true) {
                setInputErrors((prevErrors) => ({
                  ...prevErrors,
                  fullName: false,
                }));
              }
            }}
          />
          {inputErrors.fullName == true ? (
            <h1 className="text-xs pl-2 text-red-600">
              Name field is required
            </h1>
          ) : null}
          <input
            type="email"
            className="border border-black rounded-lg pl-4 py-3 placeholder:text-sm"
            placeholder="Email (preferably Business Email)"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
              if (inputErrors.email == true) {
                setInputErrors((prevErrors) => ({
                  ...prevErrors,
                  email: false,
                }));
              }
            }}
          />
          {inputErrors.email == true ? (
            <h1 className="text-xs pl-2 text-red-600">
              Email field is required
            </h1>
          ) : null}
          <input
            type={inputType}
            className="border border-black rounded-lg pl-4 py-3 placeholder:text-sm"
            placeholder="Password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
              if (inputErrors.password == true) {
                setInputErrors((prevErrors) => ({
                  ...prevErrors,
                  password: false,
                }));
              }
            }}
          />
          <button
            type="button"
            className="pl-2 text-xs border-0 self-start underline font-semibold"
            onClick={() =>
              setInputType(inputType === "password" ? "text" : "password")
            }
          >
            {inputType === "password" ? "Show" : "Hide"} password
          </button>
          {inputErrors.email == true ? (
            <h1 className="text-xs pl-2 text-red-600">
              Password field is required
            </h1>
          ) : null}
          <button
            type="submit"
            className="self-end text-sm bg-black text-white p-2 rounded-lg cursor-pointer font-semibold"
          >
            Sign Up
          </button>
        </form>
        {/* //todo: Add passport js */}
      </div>
    </div>
  );
};

export default Signup;
