import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r p-6">
      <div className="mb-10">
        <h2 className="text-xl font-bold">NomNom</h2>
        <p className="text-sm text-gray-400">Swift delivery</p>
      </div>

      <nav className="space-y-2">
        <Link href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100">
          Food menu
        </Link>

        <Link
          href="/admin/orders"
          className="block px-4 py-2 rounded-lg bg-black text-white"
        >
          Orders
        </Link>
      </nav>
    </aside>
  );
}
