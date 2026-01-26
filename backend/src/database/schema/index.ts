import { Router } from "express";
import { getFoods } from "../../controllers/category/food/get-food.js";
import { createFood } from "../../controllers/category/food/create-food.js";

const FoodRouter = Router();
FoodRouter.get("/", getFoods).post("/", createFood);
export { FoodRouter };

export * from "./food.schema.js";
export * from "./order.schema.js";
export * from "./user.schema.js";
export * from "./category.schema.js";
