import express from "express";
import {
  activateUser,
  insertNewUser,
  loginUser,
} from "../controlller/authController.js";
import {
  userActivationDataValidation,
  newUserDataValidation,
  loginUserDataValidation,
} from "../middleware/validations/authValidation.js";

const router = express.Router();

//User signUp
router.post("/register", newUserDataValidation, insertNewUser);
router.post("/activate-user", userActivationDataValidation, activateUser);
router.post("/login", loginUserDataValidation, loginUser);

export default router;
