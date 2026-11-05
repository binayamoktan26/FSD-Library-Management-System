import Joi from "joi";
import { validateData } from "./joiValidation.js";
import {
  FNAME_REQ,
  LNAME_REQ,
  EMAIL_REQ,
  PHONE_REQ,
  PASSWORD,
  SESSION_REQ,
  TOKEN_REQ,
  PASSWORD_REQ,
} from "./joiConst.js";

export const newUserDataValidation = (req, res, next) => {
  const obj = {
    fName: FNAME_REQ,
    lName: LNAME_REQ,
    email: EMAIL_REQ,
    phone: PHONE_REQ,
    password: PASSWORD_REQ,
  };
  return validateData({ req, res, next, obj });
};
export const userActivationDataValidation = (req, res, next) => {
  //create schema or rule

  const obj = {
    sessionId: SESSION_REQ,
    t: TOKEN_REQ,
  };

  // pass your data , req.body , to the schema\
  validateData({ req, res, next, obj });
};

export const loginUserDataValidation = (req, res, next) => {
  // create schema or rule

  const obj = {
    email: EMAIL_REQ,
    password: PASSWORD,
  };
  validateData({ req, res, next, obj });
};
