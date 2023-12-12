import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { reset, signout } from "../features/user/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  const onSignout = () => {
    dispatch(signout());
    navigate("/");
    dispatch(reset());
  };

  return (
    <div className="w-full mx-auto md:max-w-7xl md:py-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-white font-semibold">ReactNodeAuth</h2>
        <FaUserAlt
          onClick={onSignout}
          className="text-white text-lg cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
