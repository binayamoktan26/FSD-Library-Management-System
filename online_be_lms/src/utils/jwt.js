import jwt from "jsonwebtoken";
import { createNewSession } from "../models/session/SessionModel.js";
import { updateUser } from "../models/user/UserModel.js";

// generate accessjwt
export const createAccessJWT = async (email) => {
  //create
  const token = jwt.sign({ email }, process.env.ACCESSJWT_SECRET, {
    expiresIn: "15m",
  });
  //store
  const obj = {
    token,
    association: email,
    expire: new Date(Date.now() + 15 * 60 * 1000), //15 minutes
  };
  const newSession = await createNewSession(obj);
  return newSession?._id ? newSession : null;
};

// decode access jwt
// generate refresh jwt
export const createRefreshJWT = async (email) => {
  //create
  const refreshJWT = jwt.sign({ email }, process.env.REFRESHJWT_SECRET, {
    expiresIn: "30d",
  });
  //store
  const user = await updateUser({ email }, { refreshJWT });
  console.log(user);
  return user?._id ? refreshJWT : null;
};
// decode refresh jwt
export const getJwts = async (email) => {
  return {
    accessJWT: await createAccessJWT(email),
    refreshJWT: await createRefreshJWT(email),
  };
};
