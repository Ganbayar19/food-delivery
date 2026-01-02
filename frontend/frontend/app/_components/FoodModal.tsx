"use client";
import { useState } from "react";

type Props = {
  food: any;
  onClose: () => void;
};

export default function FoodModal({ food, onClose }: Props) {
  const [qty, setQty] = useState(1);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[520px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        <div className="flex gap-6">
          <img
            src="/food.png.png"
            alt={food.title}
            className="w-52 h-52 object-cover rounded-xl"
          />
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-xl font-bold text-black">{food.title}</h2>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Fully pancaked stacked with fruits, cream, syrup, and powdered
                sugar.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-lg font-semibold text-black">Total price</p>

              <div className="flex items-center justify-between mt-2">
                <p className="text-xl font-bold text-black">
                  ${(food.price * qty).toFixed(2)}
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => qty > 1 && setQty(qty - 1)}
                    className="text-lg font-semibold text-gray-600 hover:text-black"
                  >
                    −
                  </button>

                  <span className="text-base font-medium text-gray-700">
                    {qty}
                  </span>

                  <button
                    onClick={() => setQty(qty + 1)}
                    className="text-lg font-semibold text-gray-600 hover:text-black"
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="mt-5 w-full bg-black text-white py-3 rounded-full font-medium hover:bg-neutral-800 transition">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
