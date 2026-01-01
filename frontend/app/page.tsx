"use client";

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
    </div>
  );
}
