import express from "express";
import { activateUser, insertNewUser } from "../controlller/authController.js";
import { validateData } from "../middleware/validations/joiValidation.js";

const router = express.Router();

//User signUp
router.post("/register", validateData, insertNewUser);
router.post("/activate-user", activateUser);

export default router;
