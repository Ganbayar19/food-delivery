import type { RequestHandler } from "express";
import { FoodModel } from "../../../database/schema/foood.schema.js";

export const getFoods: RequestHandler = async (_req, rec) => {
    const foods = await FoodModel.find({});
    rec.status(200).json(foods);
}