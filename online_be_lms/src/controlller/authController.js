import { hashPassword } from "../utils/bcrypt.js";
import { createNewUser } from "../models/user/UserModel.js";
export const insertNewUser = async (req, res, next) => {
  try {
    //todo signUp process
    // receive the user data

    const { password } = req.body;

    // encrypt the password
    req.body.password = await hashPassword(password);
    // insert user into DB
    const user = await createNewUser(req.body);
    if (user?._id) {
      // create an unique user activation link and send to their email
      res.json({
        status: "success",
        message: "User signUp successfully",
      });
      return;
    }
    res.json({
      status: "error",
      message: "unable to create  an account , try again later .",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message =
        "The email already exist for another user try differ email or reset the password ";
      error.statusCode = 200;
    }

    next(error);
  }
};
