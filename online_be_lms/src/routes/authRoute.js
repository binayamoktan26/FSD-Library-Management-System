import express from "express";

const router = express.Router();

//User signUp
router.post("/register", (req, res, error) => {
  try {
    //todo signUp process

    res.json({
      status: "success",
      message: "User signUp successfully",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
