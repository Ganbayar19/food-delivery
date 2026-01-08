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