type Props = {
  title: string;
  price: string;
  img: string;
  onClick?: () => void;
};

export default function FoodCard({ title, price, img, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
    >
      <div className="relative">
        <img
          src="/food.png.png"
          alt={title}
          className="w-full h-44 object-cover"
        />
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow"
        >
          +
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm text-gray-900 line-clamp-1">
          {title}
        </h3>

        <p className="text-xs text-gray-500 mt-1 leading-snug line-clamp-2">
          Fully pancaked stacked with fruits, cream, syrup, and powdered sugar.
        </p>

        <div className="mt-3">
          <span className="text-red-500 font-semibold text-sm">{price}</span>
        </div>
      </div>
    </div>
  );
}
