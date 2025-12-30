"use client";

import { useState } from "react";
import FoodCard from "./FoodCard";
import FoodModal from "./FoodModal";

export default function FoodSection() {
  const [openFood, setOpenFood] = useState<any>(null);

  const foods = [
    {
      title: "Sunshine Stackers",
      price: 12.99,
      img: "/food1.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {foods.map((food, i) => (
          <FoodCard
            key={i}
            title={food.title}
            price={`$${food.price}`}
            img={food.img}
            onClick={() => setOpenFood(food)}
          />
        ))}
      </div>

      {openFood && (
        <FoodModal
          title={openFood.title}
          price={openFood.price}
          img={openFood.img}
          onClose={() => setOpenFood(null)}
        />
      )}
    </>
  );
}
