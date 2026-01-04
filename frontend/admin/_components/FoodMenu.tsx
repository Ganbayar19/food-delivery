"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/food-delivery-admin/src/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Pencil } from "lucide-react";

const categories = [
  { name: "All Dishes", count: 112 },
  { name: "Appetizers", count: 6 },
  { name: "Salads", count: 3 },
  { name: "Pizzas", count: 5 },
  { name: "Lunch favorites", count: 5 },
  { name: "Main dishes", count: 5 },
  { name: "Fish & Sea foods", count: 5 },
  { name: "Brunch", count: 5 },
  { name: "Side dish", count: 5 },
];

export default function AdminFoodMenu() {
  const [activeCategory, setActiveCategory] = useState("Pizzas");
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f3f3f3]">
      <aside className="w-64 bg-white p-4">
        <div className="font-bold text-lg mb-6">
          NomNom
          <br />
          <span className="text-sm font-normal text-gray-400">
            Swift delivery
          </span>
        </div>
        <nav className="space-y-2">
          <div className="bg-black text-white rounded-lg px-3 py-2">
            Food menu
          </div>
          <div className="text-gray-500 px-3 py-2">Orders</div>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="bg-[#ededed] rounded-2xl p-5">
          <h1 className="font-semibold mb-4">Dishes category</h1>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.name}
                onClick={() => setActiveCategory(c.name)}
                className={`px-3 py-1 rounded-full text-sm border flex items-center gap-2 ${
                  activeCategory === c.name
                    ? "border-red-500 text-red-500"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {c.name}
                <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">
                  {c.count}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold mb-3">Pizzas (5)</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <button
              onClick={() => setOpen(true)}
              className="border-2 border-dashed border-red-300 rounded-xl flex flex-col items-center justify-center text-sm text-gray-500 h-[260px]"
            >
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white mb-2">
                <Plus size={18} />
              </div>
              Add new Dish to Salads
            </button>
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
                  className="h-40 w-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                  <Pencil size={14} className="text-red-500" />
                </button>
                <CardContent className="p-3">
                  <div className="font-medium">Beetroot and orange salad</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Fluffy pancakes stacked with fruits, cream, syrup, and
                    powdered sugar.
                  </div>
                  <div className="font-semibold text-sm mt-2">$12.99</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md rounded-xl">
          <h3 className="font-semibold mb-4">Add new Dish to Appetizers</h3>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Food name" />
              <Input placeholder="Food price" />
            </div>

            <Textarea placeholder="List ingredients..." />

            <div className="border-2 border-dashed rounded-lg h-40 flex items-center justify-center text-sm text-gray-500">
              Choose a file or drag & drop it here
            </div>

            <Button className="w-full bg-black hover:bg-black/90">
              Add Dish
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
