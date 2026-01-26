const categories = [
  { name: "All Dishes", count: 112 },
  { name: "Appetizers", count: 6 },
  { name: "Salads", count: 3 },
  { name: "Pizzas", count: 5 },
  { name: "Lunch favorites", count: 5 },
];

export default function CategoryTabs() {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((c) => (
        <button
          key={c.name}
          className="px-4 py-2 rounded-full border text-sm bg-white hover:border-red-400"
        >
          {c.name} <span className="ml-1 text-gray-500">{c.count}</span>
        </button>
      ))}
    </div>
  );
}
