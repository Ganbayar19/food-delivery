"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-16 bg-[#0f0f0f] flex items-center px-6">
      <div className="flex items-center gap-3 select-none">
        <div className="w-9 h-9 rounded-md overflow-hidden">
          <Image
            src="/Header.png"
            alt="NomNom logo"
            width={36}
            height={36}
            className="object-cover"
          />
        </div>

        <div className="leading-tight">
          <p className="text-white font-semibold">NomNom</p>
          <p className="text-xs text-gray-400">Swift delivery</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Link
          href="/location"
          className="h-9 px-4 rounded-full bg-white flex items-center gap-2 text-sm
                     cursor-pointer hover:bg-gray-100"
        >
          <span className="text-red-500 font-medium">Delivery address:</span>
          <span className="text-gray-600">Add Location</span>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/cart"
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center
                     cursor-pointer hover:bg-gray-200"
        >
          🛒
        </Link>

        <Link
          href="/login"
          className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center
                     text-white cursor-pointer hover:opacity-90"
        >
          👤
        </Link>
      </div>
    </header>
  );
}
