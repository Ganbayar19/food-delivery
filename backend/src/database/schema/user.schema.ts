import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
<<<<<<< HEAD
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
=======
    username: { type: String, required: true, unique:true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    profileImage: { type: String, required: false },
    address: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model("User", userSchema);
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
