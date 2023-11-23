import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { hashPassword } from "../utilis/helper.js";

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

export { registerUser };
