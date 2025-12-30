type Props = {
  title: string;
  price: string;
  img: string;
  onClick: () => void;
};

export default function FoodCard({ title, price, img, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
    >
      <div className="relative">
        <img src={img} alt={title} className="h-44 w-full object-cover" />
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow"
        >
          ❤️
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">
          Fully pancaked stacked with fruits, cream, syrup, and powdered sugar.
        </p>
        <p className="text-red-500 font-bold text-sm mt-2">{price}</p>
      </div>
    </div>
  );
}
