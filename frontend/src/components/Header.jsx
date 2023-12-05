import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full mx-auto md:max-w-7xl md:py-5">
      <div className="flex items-center justify-between">
        <h2>ReactNodeAuth</h2>
        <FaUserAlt />
      </div>
    </div>
  );
};

export default Header;
