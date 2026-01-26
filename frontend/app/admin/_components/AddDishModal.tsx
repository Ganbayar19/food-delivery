export default function AddDishModal() {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[420px] p-6">
        <h2 className="font-semibold mb-4">Add new Dish</h2>

        <div className="space-y-3">
          <input
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Food name"
          />
          <input
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Food price"
          />
          <textarea
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Ingredients"
          />

          <div className="border-2 border-dashed rounded-lg p-6 text-center text-sm text-gray-500">
            Choose a file or drag & drop it here
          </div>

          <button className="w-full bg-black text-white py-2 rounded-lg">
            Add Dish
          </button>
        </div>
      </div>
    </div>
  );
}
