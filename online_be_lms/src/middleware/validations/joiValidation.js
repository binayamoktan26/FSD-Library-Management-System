import Joi from "joi";
import { responseClient } from "../responseClient.js";
export const validateData = (req, res, next) => {
  //create schema or rule

  const schema = Joi.object({
    fName: Joi.string().min(2).required(),
    lName: Joi.string().min(3).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
    }),
    phone: Joi.number().min(3),
    password: Joi.string().min(3).required(),
  });

  // pass your data , req.body , to the schema\
  const { value, error } = schema.validate(req.body);
  console.log(value);
  if (value.error) {
    return responseClient({
      req,
      res,
      message: error.message,
    });
  }
  //if pass go next () 0or response  from here
  next();
};
export const userActivationDataValidation = (req, res, next) => {
  //create schema or rule

  const schema = Joi.object({
    sessionId: Joi.string().min(10).max(100).required(),
    t: Joi.string().min(3).max(30).required(),
  });

  // pass your data , req.body , to the schema\
  const { value, error } = schema.validate(req.body);
  console.log(value);
  if (value.error) {
    return responseClient({
      req,
      res,
      message: error.message,
    });
  }
  //if pass go next () 0or response  from here
  next();
};
