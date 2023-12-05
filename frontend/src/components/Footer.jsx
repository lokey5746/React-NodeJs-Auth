import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-btn p-6 w-full bottom-0 absolute flex justify-center">
      <div className="flex items-center space-x-5">
        <h3 className="text-gray text-sm">Don't have an account yet?</h3>
        <Link className="bg-red rounded-md p-2 text-sm px-4 text-white">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Footer;
