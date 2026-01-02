type Props = {
  status: "Pending" | "Delivered" | "Cancelled" | string;
};

export default function OrderStatus({ status }: Props) {
  const styles =
    status === "Pending"
      ? "border-red-400 text-red-500"
      : status === "Delivered"
      ? "border-green-400 text-green-600"
      : "border-gray-400 text-gray-600";

  return (
    <select
      defaultValue={status}
      className={`px-3 py-1 border rounded-full text-xs bg-white ${styles}`}
    >
      <option>Pending</option>
      <option>Delivered</option>
      <option>Cancelled</option>
    </select>
  );
}
