<<<<<<< HEAD
import CategoryTabs from "./_components/CategoryTabs";
import DishCard from "./_components/DishCard";
export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Dishes category</h1>

      <CategoryTabs />

      <section>
        <h2 className="font-semibold mb-3">Pizzas (5)</h2>
        <div className="grid grid-cols-4 gap-4">
          <DishCard
            title="Beetroot and orange salad"
            price="$12.99"
            img="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
          />
        </div>
      </section>
    </div>
  );
}
=======
// import { Card } from "@/components/ui/card";
// import { CreateFoodDialog } from "./_components/CreateFoodDialog";
// import { useEffect } from "react";
// import { foods } from "../_components/data/food";
// import { FoodCard } from "../_components/FoodCard";

// export default function AdminPage() {
//     useEffect(() => {
//         const getData = async () => {
//             const rec = await fetch ("http://localhost:4000/foods")
//             const data = await rec.json(); 
//         } 
//     }, [])

//     return(
//         <main className="flex-1 p-6">
//             <Card className="grid grid-cols-5 gap-4 p-6">
//                 <CreateFoodDialog />
//                 {foods.map((food) => (
//                     <FoodCard
//                     key={food.id}
//                     id={food.id}
//                     name={food.name}
//                     price={food.price}
//                     description={food.description}
//                     image={food.image}
//                     onEdit={(id) => console.log("Edit food:", id)}
//                     />
//                 ))}
//             </Card>
//         </main>
//     )
// }
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
