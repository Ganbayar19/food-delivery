import express from "express";

export const CategoryRouter = express.Router();

CategoryRouter.get("/", (req, res) => {
  res.json({ message: "Category route working" });
});
