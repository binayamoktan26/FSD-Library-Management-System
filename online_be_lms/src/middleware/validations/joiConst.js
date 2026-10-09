import Joi from "joi";

export const FNAME = Joi.string().min(2);
export const FNAME_REQ = FNAME.required();

export const LNAME = Joi.string().min(2);
export const LNAME_REQ = LNAME.required();

export const EMAIL = Joi.string().email({
  minDomainSegments: 2,
});
export const EMAIL_REQ = EMAIL.required();

export const PASSWORD = Joi.string().required();

export const PHONE = Joi.number().min(3);
export const PHONE_REQ = PHONE.required();

export const SESSION = Joi.string().min(10).max(100).required();
export const SESSION_REQ = SESSION.required();
export const TOKEN = Joi.string().min(3).max(30).required();
export const TOKEN_REQ = TOKEN.required();
