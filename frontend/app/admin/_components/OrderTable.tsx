import OrderStatus from "./OrderStatus";

const orders = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  email: "test@gmail.com",
  foods: "2 foods",
  date: "2024/12/20",
  total: "$26.97",
  address: "СБД, 12-р хороо...",
  status: i % 3 === 0 ? "Pending" : i % 3 === 1 ? "Delivered" : "Cancelled",
}));

export default function OrdersTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="border-b text-gray-500">
          <tr>
            <th className="p-3 text-left">№</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Food</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Total</th>
            <th className="p-3 text-left">Delivery Address</th>
            <th className="p-3 text-left">Delivery state</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-b last:border-none">
              <td className="p-3">{o.id}</td>
              <td className="p-3">{o.email}</td>
              <td className="p-3">{o.foods}</td>
              <td className="p-3">{o.date}</td>
              <td className="p-3">{o.total}</td>
              <td className="p-3 text-gray-500">{o.address}</td>
              <td className="p-3">
                <OrderStatus status={o.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
