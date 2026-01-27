import type { RequestHandler } from "express";
import { UserModel } from "../../../database/schema/user.schema.js";

export const register: RequestHandler = async (req, res) => {
  const { username, password, email } = req.body;

  const isUsernameExits = await UserModel.findOne({ username });

  if (isUsernameExits)
    return res.status(400).json({ message: "Username alredy exits" });

  const isEmailExits = await UserModel.findOne({ username });

  if (isEmailExits)
    return res.status(400).json({ message: "Email alredy exits" });

  const user = await UserModel.create({
    username,
    password,
    email,
  });

  res.status(200).json({ user });
};
