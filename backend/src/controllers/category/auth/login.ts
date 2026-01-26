import type { RequestHandler } from "express";
import { userModel } from "../../../database/schema/user.schema.js";
import jwt from "jsonwebtoken";

export const login: RequestHandler = async (req, rec) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({ username });

  if (!user) return rec.status(404).json({ message: "User not found" });

  const { password: userPassword, ...rest } = user;

  if (userPassword !== password)
    return rec.status(401).json({ message: "Username or password wrong" });

  const accessToken = jwt.sign({ use: rest }, "Secret");

  rec.status(200).json({
    user: rest,
    accessToken,
  });
};
