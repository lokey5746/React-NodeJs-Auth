import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [dispatch, navigate, user]);

  return (
    <div className="w-full mx-auto md:max-w-7xl md:py-5">
      {user && (
        <h2 className="text-center text-lg text-white">
          User Toekn:- {user.data.slice(0, 20)}
        </h2>
      )}
    </div>
  );
};

export default Home;
