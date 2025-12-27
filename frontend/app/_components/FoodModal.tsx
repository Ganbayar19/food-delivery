import React, { useState } from "react";
import { X, Minus, Plus } from "lucide-react"; 
import { FoodItem } from "./Type";

interface ModalProps {
  item: FoodItem;
  onClose: () => void;
}

const FoodModal: React.FC<ModalProps> = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[2rem] overflow-hidden max-w-2xl w-full flex flex-col md:flex-row relative shadow-2xl animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 bg-white border rounded-full p-1 hover:bg-gray-100 z-10"
        >
          <X size={20} className="text-gray-500" />
        </button>
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-[#e25c4e] text-2xl font-bold mb-3">
              {item.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {item.description}
            </p>
          </div>

          <div>
            <div className="flex justify-between items-end mb-6">
              <div>
                <span className="text-gray-400 text-sm block mb-1">
                  Total price
                </span>
                <span className="text-2xl font-bold text-zinc-900">
                  ${(item.price * quantity).toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-4 border rounded-full px-3 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-400 hover:text-black"
                >
                  <Minus size={18} />
                </button>
                <span className="font-bold w-4 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-400 hover:text-black"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <button className="w-full bg-[#1c1c1c] text-white py-3.5 rounded-xl font-medium hover:bg-black transition-colors">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
