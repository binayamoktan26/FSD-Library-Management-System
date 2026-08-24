import express from "express";
import { insertNewUser } from "../controlller/authController.js";

const router = express.Router();

//User signUp
router.post("/register", insertNewUser);

export default router;
