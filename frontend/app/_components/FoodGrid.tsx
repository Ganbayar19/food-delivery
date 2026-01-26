<<<<<<< HEAD
"use client";

import { FoodCard, FoodItem } from "./FoodCard";

interface FoodGridProps {
  title: string;
  items: FoodItem[];
  onItemClick: (item: FoodItem) => void;
}

export function FoodGrid({ title, items, onItemClick }: FoodGridProps) {
  return (
    <div className="px-8 py-8">
      <h3 className="text-white text-2xl font-bold mb-6">{title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <FoodCard key={item.id} item={item} onClick={onItemClick} />
        ))}
      </div>
    </div>
=======
import { foods, Food } from "./data/food";
import {FoodCard} from "./FoodCard";

const sections = [
  { title: "Appetizers", key: "appetizer" },
  { title: "Salads", key: "salad" },
  { title: "Lunch Favorites", key: "lunch" },
] as const;

export default function FoodSection() {
  return (
    <section className="flex justify-center px-6 py-14">
      <div className="w-full max-w-6xl space-y-20">
        {sections.map((section) => {
          const list = foods.filter(
            (food: Food) => food.category === section.key
          );

          if (list.length === 0) return null;

          return (
            <div key={section.key} id={section.key}>
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {list.map((food: Food) => (
                  <FoodCard
                    key={food.id}
                    title={food.title}
                    price={food.price}
                    img={food.img}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
  );
}
