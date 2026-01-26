"use client";

import CreateAccount from "@/app/_components/login/CreateAccount";

export default function RegisterPage() {
  return <CreateAccount goLogin={() => window.history.back()} />;
}
