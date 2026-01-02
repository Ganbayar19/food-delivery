import { foods, Food } from "./data/food";
import FoodCard from "./FoodCard";

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
  );
}
