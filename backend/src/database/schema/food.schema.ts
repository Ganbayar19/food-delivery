import { Schema, model } from "mongoose";

const foodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Number, required: true },

    ingredients: { type: Number, required: true },
    category: { type: Number, required: true },

    ingredient: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const FoodModel = model("Food", foodSchema);
