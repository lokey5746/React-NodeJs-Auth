import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import verifyToken from "../utilis/verifyToken.js";

const isAuth = asyncHandler(async (req, res, next) => {
  // get token
  const headerObj = req.headers;
  // console.log(headerObj);
  const token = headerObj?.authorization?.split(" ")[1];
  // console.log(token);
  // verify token
  const verifiedToken = verifyToken(token);
  if (verifiedToken) {
    const user = await User.findById(verifiedToken.id).select("-password");
    req.userAuth = user;
    // console.log(req.userAuth);
    next();
  } else {
    const err = new Error("Token expired/invalid");
    next(err);
  }
});

export { isAuth };
