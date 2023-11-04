import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    amount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model("user",userSchema,"users");