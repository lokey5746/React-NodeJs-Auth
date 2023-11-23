import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { hashPassword, verifyPassword } from "../utilis/helper.js";
import generateToken from "../utilis/generateToken.js";

// @desc  Register User
// @route POST /api/v1/users/register
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   check is user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new Error("email already taken");
  }

  const userCreated = await User.create({
    name,
    email,
    password: await hashPassword(password),
  });
  res.status(201).json({
    status: "success",
    message: "User register successfully",
    data: userCreated,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //   check if user exist
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not exist");
  }

  //   verify password
  const isMatched = await verifyPassword(password, user.password);
  if (!isMatched) {
    throw new Error("Invalid ceredentials");
  }
  res.status(201).json({
    status: "success",
    message: "User login successfully",
    data: generateToken(user._id),
  });
});

export { registerUser, loginUser };
