"use client";

import { useEffect, useState } from "react";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
import CreateAccount from "./_components/login/CreateAccount";
import Login from "./_components/login/Login";
import FoodSection from "./_components/FoodSection";

export default function Page() {
  const [step, setStep] = useState<"signup" | "login" | "home">("signup");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setStep("home");
    }
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
    <div className="min-h-screen flex flex-col bg-[#0f0f0f]">
      <Header goLogout={handleLogout} />
      <Banner />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-10 space-y-14">
        <FoodSection title="Appetizers" />
        <FoodSection title="Salads" />
        <FoodSection title="Lunch favorites" />
      </main>

      <Footer />
    </div>
  );
}
