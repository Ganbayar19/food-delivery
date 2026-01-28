import { Router } from "express";
import { createFood } from "../controllers/category/food/create-food.js";
import { getFoods } from "../controllers/category/food/get-food.js";
import { authMiddleware } from "../database/middlewares/auth.middleware.js";

const FoodRouter = Router();

FoodRouter.get("/", authMiddleware, getFoods).post("/create", createFood);

export { FoodRouter };
