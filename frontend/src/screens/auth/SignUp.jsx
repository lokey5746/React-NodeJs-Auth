import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUp = (e) => {
    console.log("User signup");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <div className=" max-w-lg space-y-7 md:space-y-10">
        <div className="text-white flex flex-col items-center">
          <h2 className="text-3xl font-bold">Welcome</h2>
          <p className="text-xs md:text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
            nesciunt mollitia nisi hic eligendi. Dignissimos facilis repellat
            nihil sequi laudantium.
          </p>
        </div>

        <form onSubmit={handleSubmit(signUp)} className="space-y-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray text-sm md:text-lg">
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="p-3 md:p-4 rounded-md border border-gray text-xs md:text-sm bg-bg shadow-sm outline-none text-white"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-xs text-red">Name is Required</span>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray text-sm md:text-lg">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="p-3 md:p-4 rounded-md border border-gray text-xs md:text-sm bg-bg shadow-sm outline-none text-white"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-xs text-red">Email Required</span>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray text-sm md:text-lg">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="p-3 md:p-4 rounded-md border border-gray text-xs md:text-sm bg-bg shadow-sm outline-none text-white"
              placeholder="Enter your email password "
            />
            {errors.password && (
              <span className="text-xs text-red">Password Required</span>
            )}
          </div>
          <button className="p-3 md:p-4 rounded-md border-gray text-xs md:text-sm font-semibold bg-red shadow-sm w-full text-white">
            Sign Up
          </button>
        </form>
      </div>
      <div className="bg-btn p-6 w-full bottom-0 absolute flex justify-center">
        <div className="flex items-center space-x-5">
          <h3 className="text-gray text-xs md:text-sm">
            Already have an account yet?
          </h3>
          <Link
            to="/"
            className="bg-red rounded-md p-1 md:p-2 text-xs md:text-sm px-4 text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
