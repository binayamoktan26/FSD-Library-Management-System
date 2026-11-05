import userSchema from "./UserSchema.js";

//insert new user

export const createNewUser = (userObj) => {
  // userObj came from the fronted
  return userSchema(userObj).save();
};
export const updateUser = (filter, update) => {
  // userObj came from the fronted
  return userSchema.findOneAndUpdate(filter, update, { new: true });
};
export const getUserByEmail = (email) => {
  // update user  @email:  type string
  return userSchema.findOne({ email });
};
