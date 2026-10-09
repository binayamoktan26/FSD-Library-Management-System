import express from "express";
import { activateUser, insertNewUser } from "../controlller/authController.js";
import {
  userActivationDataValidation,
  newUserDataValidation,
} from "../middleware/validations/authValidation.js";

const router = express.Router();

//User signUp
router.post("/register", newUserDataValidation, insertNewUser);
router.post("/activate-user", userActivationDataValidation, activateUser);

export default router;
