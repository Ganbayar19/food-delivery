export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-4 py-6">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-red-500 text-xl font-bold">NomNom</span>
        </div>

        <nav className="space-y-2">
          <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white">
            Food menu
          </button>
          <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
            Orders
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
