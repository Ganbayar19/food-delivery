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
