import express from "express";
import { activateUser, insertNewUser } from "../controlller/authController.js";

const router = express.Router();

//User signUp
router.post("/register", insertNewUser);
router.post("/activate-user", activateUser);

export default router;
