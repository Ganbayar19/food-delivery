import { RequestHandler } from "express";
import { UserModel } from "../../../database/schema/user.schema.js";
import jwt from "jsonwebtoken"

export const getMe: RequestHandler = async (req, rec) => {
    const authorization = req.headers.authorization;

    if (!authorization) return rec.status(401).json({message: "Unauthorized"});

    const token = authorization.split(" ")[1] as string;

    try {
        const {user} = jwt.verify(token, "Secret") as {user: Omit<typeof UserModel
            res.status(200).json({user})
        }catch{
            res.status(401).json({message: "Invaild token"})
        }
    }
}