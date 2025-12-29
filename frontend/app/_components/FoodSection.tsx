import FoodCard from "./FoodCard";

const foods = [
  {
    title: "Finger food",
    price: "$12.99",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    title: "Cranberry Brie Bites",
    price: "$12.99",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    title: "Sunshine Stackers",
    price: "$12.99",
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
  },
  {
    title: "Brie Crostini Appetizer",
    price: "$12.99",
    img: "https://images.unsplash.com/photo-1604908177225-6b1b3d1d4f8c",
  },
  {
    title: "Sunshine Stackers",
    price: "$12.99",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
  },
  {
    title: "Grilled chicken",
    price: "$12.99",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
  },
];

export default function FoodSection({ title }: { title: string }) {
  return (
    <section className="mb-12">
      <h2 className="text-white text-lg font-semibold mb-6">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((item, i) => (
          <FoodCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
