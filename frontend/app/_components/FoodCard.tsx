import { FoodItem } from "./Type";
import React, { useState } from "react";
export default function MenuPage() {
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);

  const appetizers: FoodItem[] = [
    {
      id: "1",
      title: "Sunshine Stackers",
      price: 12.99,
      image:
        "./Food.png",
      description:
        "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#2a2a2a] p-8">
      <h1 className="text-white text-3xl font-bold mb-8 text-left">
        Appetizers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {appetizers.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="bg-white rounded-[1.5rem] p-3 shadow-md cursor-pointer group hover:ring-2 hover:ring-purple-500 transition-all relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Salad
            </div>

            <div className="relative aspect-video mb-3">
              <img
                src={item.image}
                className="w-full h-full object-cover rounded-[1rem]"
              />
              <div className="absolute bottom-2 right-2 bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                <span className="text-zinc-800 text-lg font-bold">+</span>
              </div>
            </div>

            <div className="flex justify-between items-start mb-1">
              <h3 className="text-[#e25c4e] font-bold text-sm">{item.title}</h3>
              <span className="text-zinc-900 font-bold text-sm">
                ${item.price}
              </span>
            </div>
            <p className="text-gray-400 text-[10px] leading-tight line-clamp-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <FoodCard item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
