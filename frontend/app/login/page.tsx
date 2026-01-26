"use client";

import Login from "../_components/login/Login";

export default function LoginPage() {
  const handleLogin = () => {
    console.log("Logged in");
  };

  const handleGoSignup = () => {
    window.location.href = "/";
  };

  return <Login goLogin={handleLogin} goSignup={handleGoSignup} />;
}
