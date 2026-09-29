import sessionSchema from "./SessionSchema.js";

//insert new session

export const createNewSession = (sessionObj) => {
  return sessionSchema(sessionObj).save();
};
export const deleteSession = (filter) => {
  return sessionSchema.findOneAndDelete(filter);
};
