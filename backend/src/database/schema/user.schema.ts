import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: Number, required: true, unique: true },
    email: { type: Number, required: true, unique: true },
    password: { type: Number, required: true },
    profileImge: { type: Number, required: false },
    address: { type: Number, required: false },
    role: { type: String, required: true, default: "customer" },
  },
  {
    timestamps: true,
  },
);

export const userModel = model("User", userSchema);
