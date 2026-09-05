import { hashPassword } from "../utils/bcrypt.js";
import { createNewUser } from "../models/user/UserModel.js";
import { responseClient } from "../middleware/responseClient.js";
import { createNewSession } from "../models/session/SessionModel.js";
import { v4 as uuidv4 } from "uuid";
import { userActivationUrlEmail } from "../services/email/emailService.js";
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
      // create an unique user activation link and send to their email\

      const session = await createNewSession({
        token: uuidv4(),
        association: user.obj,
      });
      if (session?._id) {
        const url = `${process.env.ROOT_URL}/activate-use?sessionId=${session._id}&t=${session.token}`;

        //send this url to their email
        console.log(url);
        const emailId = await userActivationUrlEmail({
          email: user.email,
          name: user.fName,
          url,
        });
        if (emailId) {
          const message =
            "We have sent you an email with activtion link . Please check your email and follow the instraction to activate your account. ";

          return responseClient({ req, res, message });
        }
      }
    }
    throw new Error("unable to create  an account , try again later .");
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message =
        "The email already exist for another user try differ email or reset the password ";
      error.statusCode = 400;
    }

    next(error);
  }
};
