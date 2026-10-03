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
  const value = schema.validate(req.body);
  console.log(value);
  if (value.error) {
    return responseClient({
      req,
      res,
      message: value.error.message,
    });
  }
  //if pass go next () 0or response  from here
  next();
};
