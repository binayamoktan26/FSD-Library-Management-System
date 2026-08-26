import userSchema from "./UserSchema.js";

//insert new user

export const createNewUser = (userObj) => {
  // userObj came from the fronted
  return userSchema(userObj).save();
};
