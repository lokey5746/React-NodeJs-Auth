import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
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

        <form action="" className="space-y-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray text-sm md:text-lg">
              Full Name
            </label>
            <input
              type="text"
              className="p-3 md:p-4 rounded-md border border-gray text-xs md:text-sm bg-bg shadow-sm outline-none"
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray text-sm md:text-lg">
              Email Address
            </label>
            <input
              type="email"
              className="p-3 md:p-4 rounded-md border border-gray text-xs md:text-sm bg-bg shadow-sm outline-none"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray text-sm md:text-lg">
              Password
            </label>
            <input
              type="password"
              className="p-3 md:p-4 rounded-md border border-gray text-xs md:text-sm bg-bg shadow-sm outline-none"
              placeholder="Enter your email password "
            />
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
