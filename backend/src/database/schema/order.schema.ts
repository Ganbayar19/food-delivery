import { Type } from "lucide-react";
import { Schema, model } from "mongoose";
import { ref } from "node:process";

const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    status: { type: String, required: true, default: "pending" },
  },
  {
    timestamps: true,
  }
);

export const orderModel = model("Order", orderSchema);
