"use client";

import { useEffect, useState } from "react";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
import CreateAccount from "./_components/login/CreateAccount";
import Login from "./_components/login/Login";

export default function Page() {
  const [step, setStep] = useState<"signup" | "login" | "home">("signup");

  // Refresh хийхэд login хадгалах
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

  // 🔐 AUTH SCREENS (энд Header/Banner/Footer ОРОХГҮЙ)
  if (step === "signup") {
    return <CreateAccount goLogin={() => setStep("login")} />;
  }

  if (step === "login") {
    return <Login goLogin={handleLogin} goSignup={() => setStep("signup")} />;
  }

  // 🏠 HOME (энд л Header/Banner/Footer харагдана)
  return (
    <div className="min-h-screen flex flex-col">
      <Header goLogout={handleLogout} />
      <Banner />

      <main className="flex-1">
        <h1 className="text-3xl font-bold p-10">Home content here</h1>
      </main>

      <Footer />
    </div>
  );
}
