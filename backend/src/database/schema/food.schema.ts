import { Schema, model } from "mongoose";

const foodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Number, required: true },
<<<<<<< HEAD
    ingredients: { type: Number, required: true },
    category: { type: Number, required: true },
=======
    ingredient: { type: String, required: true },
    category: { type: String, required: true },
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
  },
  {
    timestamps: true,
  }
);

export const FoodModel = model("Food", foodSchema);
