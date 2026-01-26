<<<<<<< HEAD
import express from "express";

export const CategoryRouter = express.Router();

CategoryRouter.get("/", (req, res) => {
  res.json({ message: "Category route working" });
});
=======
import { Router } from "express";
import { getCategories } from "../controllers/category/get-categories.js";
import { createCategory } from "../controllers/category/create-categories.js";

const CategoryRouter = Router();

CategoryRouter.get("/", getCategories).post("/", createCategory);

export { CategoryRouter };      
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
