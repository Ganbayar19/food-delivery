"use client";

import { createContext, useContext, useState, PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axios";

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const login = async (username: string, password: string) => {
    const { data } = await api.post("/auth/login", { username, password });
    setUser(data.user);
    router.push("/");
  };

  const register = async (
    username: string,
    email: string,
    password: string,
  ) => {
    await api.post("/auth/register", { username, email, password });
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
