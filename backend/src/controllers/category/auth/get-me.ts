import { RequestHandler } from "express";
import { UserModel } from "../../../database/schema/user.schema.js";
import jwt from "jsonwebtoken";

export const getMe: RequestHandler = async (req, res) => {
    const authorization = req.headers.authorization;

    if (!authorization) return res.status(401).json({ message: "Unauthorized" });

    const token = authorization.split(" ")[1] as string;

    try {
        const { user: userId } = jwt.verify(token, "Secret") as { user: string };
        const user = await UserModel.findById(userId).select("-password").lean();
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ user });
    } catch {
        res.status(401).json({ message: "Invalid token" });
    }
};
