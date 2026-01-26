"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface HeaderProps {
  totalItems: number;
  onCartClick: () => void;
}

<<<<<<< HEAD
export default function Header({ totalItems, onCartClick }: HeaderProps) {
=======
export function Header({ totalItems, onCartClick }: HeaderProps) {
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
  return (
    <header className="bg-[#1a1a1a] px-8 py-3 flex items-center justify-between border-b border-gray-800">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-red-500 to-red-600 w-9 h-9 rounded-lg flex items-center justify-center shadow-md">
<<<<<<< HEAD
          <span className="text-white text-lg font-bold">
            <img src="/Header.png" alt="header" />
          </span>
=======
          <span className="text-white text-lg font-bold">🍜</span>
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
        </div>
        <div>
          <h1 className="text-white font-bold text-base leading-none">
            NomNom
          </h1>
          <p className="text-gray-400 text-[10px] mt-0.5">Swift delivery</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="px-4 py-1.5 h-9 bg-white rounded-full text-xs flex items-center gap-2 hover:bg-gray-50 border-none shadow-sm"
        >
<<<<<<< HEAD
          <span className="text-red-500 text-sm">
            <img src="/location.png" alt="icon" />
          </span>
=======
          <span className="text-red-500 text-sm">📍</span>
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
          <span className="text-gray-700 font-medium">
            Delivery address: Add Location
          </span>
          <span className="text-gray-400 text-xs">▼</span>
        </Button>

        <Button
          size="icon"
          variant="ghost"
          className="w-9 h-9 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
        >
          <span className="text-white text-sm">🔍</span>
        </Button>

        <Button
          size="icon"
          className="w-9 h-9 bg-red-500 rounded-full hover:bg-red-600 relative transition-all shadow-md"
          onClick={onCartClick}
        >
          <ShoppingCart className="h-4 w-4 text-white" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-red-500 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">
              {totalItems}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}
