import Joi from "joi";
import { responseClient } from "../responseClient.js";
export const validateData = ({ req, res, next, obj }) => {
  //create schema or rule

  const schema = Joi.object(obj);

  // pass your data , req.body , to the schema\
  const { value, error } = schema.validate(req.body);

  if (value.error) {
    return responseClient({
      req,
      res,
      message: error.message,
      statusCode: 400,
    });
  }
  //if pass go next () 0or response  from here
  next();
};
