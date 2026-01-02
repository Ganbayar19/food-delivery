import { Router } from "express";
import { getFoods } from "../../controllers/category/food/get-food.js";
import { createFood } from "../../controllers/category/food/create-food.js";


const FoodRouter = Router();
FoodRouter.get("/", getFoods).post("/", createFood);
export { FoodRouter };
