"use client";

import { useState } from "react";

type Props = {
  title: string;
  price: number;
  img: string;
  onClose: () => void;
};

export default function FoodModal({ title, price, img, onClose }: Props) {
  const [qty, setQty] = useState(1);

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-5 w-[520px] relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400"
        >
          ✕
        </button>

        <div className="flex gap-4">
          <img src={img} className="w-48 h-40 object-cover rounded-lg" />

          <div className="flex-1">
            <h2 className="font-semibold text-base">{title}</h2>
            <p className="text-xs text-gray-500 mt-1">
              Fully pancaked stacked with fruits, cream, syrup, and powdered
              sugar.
            </p>

            <div className="mt-4">
              <p className="text-xs text-gray-500">Total price</p>
              <p className="font-bold text-lg">${(price * qty).toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-7 h-7 border rounded"
              >
                -
              </button>
              <span>{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-7 h-7 border rounded"
              >
                +
              </button>
            </div>

            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
