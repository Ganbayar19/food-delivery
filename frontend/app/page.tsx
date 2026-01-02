"use client";

<<<<<<< HEAD
import { useEffect, useState } from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
import FoodCard from "./_components/FoodCard";
import Login from "./_components/login/Login";
import CreateAccount from "./_components/login/CreateAccount";
import FoodModal from "./_components/FoodModal";

const foods = [
  {
    id: 1,
    title: "Sunshine Stackers",
    price: 12.99,
    img: "/food/1.jpg",
  },
  {
    id: 2,
    title: "Grilled chicken",
    price: 12.99,
    img: "/food/2.jpg",
  },
  {
    id: 3,
    title: "Cranberry Brie Bites",
    price: 12.99,
    img: "/food/3.jpg",
  },
];

export default function Page() {
  const [step, setStep] = useState<"signup" | "login" | "home">("login");
  const [selectedFood, setSelectedFood] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setStep("home");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("token", "ok");
    setStep("home");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setStep("login");
  };

  if (step === "signup") {
    return <CreateAccount goLogin={() => setStep("login")} />;
  }

  if (step === "login") {
    return <Login goLogin={handleLogin} goSignup={() => setStep("signup")} />;
  }

  return (
    <div className="min-h-screen bg-neutral-800 text-white">
      <Header goLogout={handleLogout} />
      <Banner />

      <main className="px-10 py-10">
        <h2 className="text-xl font-semibold mb-6">Appetizers</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-item-center">
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              title={food.title}
              price={"{food.price}"}
              img={food.img}
              onClick={() => setSelectedFood(food)}
            />
          ))}
        </div>
      </main>

      <Footer />

      {selectedFood && (
        <FoodModal food={selectedFood} onClose={() => setSelectedFood(null)} />
      )}
=======
import { useState } from "react";
import { toast } from "sonner";
import { CartDrawer } from "@/components/CardDrawer";
import { Header } from "@/components/header";
import { Banner } from "@/components/Banner";
import { FoodGrid } from "@/components/food-grid";
import { FoodDetailDialog } from "@/components/food-detail-dialog";
import { FoodItem } from "@/components/food-card";
import { useCart } from "@/Context/CardContext";

const foodItems = [
  {
    id: 1,
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1541599468348-e96984315921?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Cranberry Brie Bites",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1559058789-672da06263d8?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Sunshine Stackers",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Brie Crostini Appetizer",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Sunshine Stackers",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Grilled chicken",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
  },
];

export default function Home() {
  const { addToCart, setIsCartOpen, getTotalItems } = useCart();
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const handleAddToCart = (food: FoodItem, quantity: number) => {
    for (let i = 0; i < quantity; i++) addToCart(food);
    setSelectedFood(null);
    toast.success("Food is being added to the cart!");
  };

  return (
    <div className="min-h-screen bg-[#2a2a2a]">
      <Header
        totalItems={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <HeroBanner />

      <FoodGrid
        title="Appetizers"
        items={foodItems}
        onItemClick={setSelectedFood}
      />

      <FoodDetailDialog
        food={selectedFood}
        onClose={() => setSelectedFood(null)}
        onAddToCart={handleAddToCart}
      />
>>>>>>> 996227d (context)
    </div>
  );
}
