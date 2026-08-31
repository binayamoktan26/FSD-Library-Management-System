import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    association: {
      type: String,
    },
    expire: {
      type: Date,
      required: true,
      default: new Date(Date.now() + 3600000), //1hr  
      expires: 0, //for delete  this token
    },
  },
  {
    timestamps: true,
  },
);
export default mongoose.model("session", sessionSchema); // sessions
