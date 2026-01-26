<<<<<<< HEAD
import { Type } from "lucide-react";
import { Schema, model } from "mongoose";
import { ref } from "node:process";
=======
import { Schema, model } from "mongoose";
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9

const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
<<<<<<< HEAD
    orderItems: [
      {
        foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true },
=======
    items: [
      {
        foodId: { type: Schema.Types.ObjectId, ref: "User", required: true },
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
<<<<<<< HEAD
    status: { type: String, required: true, default: "pending" },
=======
    status: { type: String, required: true, default: 'pending' },
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
  },
  {
    timestamps: true,
  }
);

<<<<<<< HEAD
export const orderModel = model("Order", orderSchema);
=======
export const OrderModel = model("Order", orderSchema);
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
