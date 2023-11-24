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

// @desc  Login User
// @route POST /api/v1/users/login
// @access Public

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

// @desc  Get User
// @route GET /api/v1/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.userAuth._id).select(
    "-password -createdAt -updatedAt"
  );
  if (!user) {
    throw new Error("User not found");
  }
  res.status(201).json({
    status: "success",
    message: "User profile",
    data: user,
  });
});

// @desc  Updating User
// @route PUT /api/v1/users/updateProfile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // if email is taken
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new Error("Email already taken");
  }

  // check if user update password
  if (password) {
    const user = await User.findByIdAndUpdate(
      req.userAuth._id,
      {
        email,
        password: await hashPassword(password),
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(201).json({
      status: "success",
      data: user,
      message: "User Update successfully",
    });
  } else {
    // update
    const user = await User.findByIdAndUpdate(
      req.userAuth._id,
      {
        name,
        email,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: "success",
      data: user,
      message: "User update successfully",
    });
  }
});

// @desc  Admin GET all Users
// @route PUT /api/v1/users
// @access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(201).json({
    status: "success",
    data: users,
    message: "Fetch all users",
  });
});

//@desc Delete User
//@route DELETE /api/users/:id
//@access Private/Admin

const adminDeleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.deleteOne();
    res.status(201).json({
      status: "success",
      message: "User delete sucessfully",
    });
  } else {
    throw new Error("User not found");
  }

  // if (user) {
  //   await user.remove();
  //   res.status(201).json({
  //     status: "success",
  //     message: "User removed successfully",
  //   });
  // } else {
  //   res.status(404);
  //   throw new Error("User not found");
  // }
});

export {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  adminDeleteUser,
};
