import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  adminDeleteUser,
  changePassword,
  forgotpassword,
  resetPassword,
} from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuth.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = express.Router();
router.route("/").post(registerUser);
// router.route("/").get(isAuth, isAdmin, getUsers);
router.route("/:id").delete(isAuth, isAdmin, adminDeleteUser);
// router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(isAuth, getUserProfile);
router.route("/updateProfile").put(isAuth, updateUserProfile);
router.route("/changepassword").put(isAuth, changePassword);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetPassword);

export default router;
