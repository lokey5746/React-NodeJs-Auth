import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { hashPassword, verifyPassword } from "../utilis/helper.js";
import generateToken from "../utilis/generateToken.js";
import Token from "../models/tokenModel.js";
import crypto from "crypto";

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
});

// @desc  Change Password
// @route POST /api/v1/users/chanagepassword
// @access Private

const changePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.userAuth._id);

  const { oldPassword, password } = req.body;
  if (!user) {
    res.status(400);
    throw new Error("user not found");
  }

  // check oldPassword with entered password

  const isMatched = await verifyPassword(oldPassword, user.password);

  // save new password

  if (user && isMatched) {
    user.password = password;
    await user.save();
    res.status(200).json("Password Changed successfully");
  } else {
    res.status(400);
    throw new Error("Old password is incorrect");
  }
});

//@desc Get user forgotpassword
//@route GET /api/users/forgotpassword
//@access Public
const forgotpassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  // delete existing token from DB
  let token = await Token.findOne({ userId: user._id });
  if (token) {
    await token.deleteOne();
  }

  // create reset token
  let resetToken = crypto.randomBytes(32).toString("hex") + user._id;

  // Hash token
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // save the token DB
  await new Token({
    userId: user._id,
    token: hashedToken,
    createdAt: Date.now(),
    expiresAt: Date.now() + 30 * (60 * 1000),
  }).save();

  // construct reset url

  const resetUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  // Reset Email
  const message = `
  <h2>Hello ${user.name}</h2>
  <p>Please use the url below to reset your password</p>  
  <p>This reset link is valid for only 30minutes.</p>
  <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
  <p>Regards...</p>
  <p>HA IT Team</p>
`;
  const subject = "Password Reset Request";
  const send_to = user.email;
  const sent_from = process.env.EMAIL_USER;
  try {
    await sendEmail(subject, message, send_to, sent_from);
    res.status(200).json({ success: true, message: "Reset Email Sent" });
  } catch (error) {
    res.status(500);
    throw new Error("Email not sent, please try again");
  }
});

export {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  adminDeleteUser,
  changePassword,
  forgotpassword,
};
