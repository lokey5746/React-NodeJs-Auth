import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className=" max-w-lg space-y-10">
        <div className="text-white flex flex-col items-center">
          <h2 className="text-3xl font-bold">Welcome</h2>
          <p className="text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
            nesciunt mollitia nisi hic eligendi. Dignissimos facilis repellat
            nihil sequi laudantium.
          </p>
        </div>
        <div className="flex items-center space-x-5 w-ful">
          <button className="text-red  p-4 font-semibold rounded-md shadow-md bg-btn w-full">
            Personal
          </button>
          <button className="text-white  font-semibold p-4 rounded-md shadow-md bg-btn w-full">
            Admin
          </button>
        </div>
        <form action="" className="space-y-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray">
              Email Address
            </label>
            <input
              type="email"
              className="p-4 rounded-md border border-gray text-sm bg-bg shadow-sm outline-none"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray">
              Password
            </label>
            <input
              type="password"
              className="p-4 rounded-md border border-gray text-sm bg-bg shadow-sm outline-none"
              placeholder="Enter your email password "
            />
          </div>
          <button className="p-4 rounded-md border-gray text-sm font-semibold bg-red shadow-sm w-full text-white">
            Sign In
          </button>
        </form>
      </div>
      <div className="bg-btn p-6 w-full bottom-0 absolute flex justify-center">
        <div className="flex items-center space-x-5">
          <h3 className="text-gray text-sm">Don't have an account yet?</h3>
          <Link className="bg-red rounded-md p-2 text-sm px-4 text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
