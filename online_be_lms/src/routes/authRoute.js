import express from "express";
import { activateUser, insertNewUser } from "../controlller/authController.js";
import {
  userActivationDataValidation,
  validateData,
} from "../middleware/validations/joiValidation.js";

const router = express.Router();

//User signUp
router.post("/register", validateData, insertNewUser);
router.post("/activate-user", userActivationDataValidation, activateUser);

export default router;
