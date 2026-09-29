import { hashPassword } from "../utils/bcrypt.js";
import { createNewUser, updateUser } from "../models/user/UserModel.js";
import { responseClient } from "../middleware/responseClient.js";
import {
  createNewSession,
  deleteSession,
} from "../models/session/SessionModel.js";
import { v4 as uuidv4 } from "uuid";
import {
  userActivatedNotificationEmail,
  userActivationUrlEmail,
} from "../services/email/emailService.js";
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
        association: user.email,
      });
      console.log(session);
      if (session?._id) {
        const url = `${process.env.ROOT_URL}/activate-user?sessionId=${session._id}&t=${session.token}`;

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

export const activateUser = async (req, res, next) => {
  try {
    const { sessionId, t } = req.body;
    console.log(sessionId, t);
    const session = await deleteSession({
      _id: sessionId,
      token: t,
    });
    if (session?._id) {
      //update user to active
      const user = await updateUser(
        { email: session.association },
        {
          status: "active",
        },
      );
      if (user?._id) {
        //respond
        //send email notification

        userActivatedNotificationEmail({ email: user.email, name: user.fName });

        const message =
          "Your accound has been activated , you may logI in Now ";

        return responseClient({ req, res, message });
      }
    }
    const message = "Invalid Link or token expired !";
    const statusCode = 400;
    responseClient({ req, res, message });
  } catch (error) {
    next(error);
  }
};
