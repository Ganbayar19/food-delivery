type Props = {
  title: string;
  price: string;
  img: string;
};

export default function DishCard({ title, price, img }: Props) {
  return (
    <div className="bg-white rounded-xl p-3 shadow hover:shadow-md transition relative">
      <img src={img} className="h-40 w-full object-cover rounded-lg" />

      <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
        ✏️
      </button>

      <h3 className="mt-3 font-semibold text-sm">{title}</h3>
      <p className="text-xs text-gray-500 mt-1">
        Fluffy pancakes stacked with fruits...
      </p>

      <p className="text-red-500 font-semibold mt-2">{price}</p>
    </div>
  );
}
