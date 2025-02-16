import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String },
    age: { type: Number },
    gender: { type: String },
    phone: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
