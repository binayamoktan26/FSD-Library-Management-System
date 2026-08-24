import userSchema from "./userSchema";

//insert new user

export const createNewUser = (userObj) => {
  // userObj came from the fronted
  return userSchema(userObj).save();
};
