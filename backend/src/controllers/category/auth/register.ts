import type { RequestHandler } from "express";
import { userModel } from "../../../database/schema/user.schema.js";
import jwt from "jsonwebtoken";

export const register: RequestHandler = async (req, res) => {
  const { username, password, email } = req.body;

  const isUsernameExits = await userModel.findOne({ username });

  if (isUsernameExits)
    return res.status(400).json({ message: "Username alredy exits" });

  const isEmailExits = await userModel.findOne({ username });

  if (isEmailExits)
    return res.status(400).json({ message: "Email alredy exits" });

  const user = await userModel.create({
    username,
    password,
    email,
  });

  res.status(200).json({ user });
};
