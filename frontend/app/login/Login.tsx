"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-sm space-y-6">
          <div>
            <h1 className="text-2xl font-semibold">Log in</h1>
            <p className="text-sm text-muted-foreground">
              Sign up to explore your favorite dishes.
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              className="w-full rounded-md bg-black py-2 text-white hover:bg-black/90"
              onClick={() => {
                localStorage.setItem("token", "logged-in");
                window.location.href = "/";
              }}
            >
              Sign up
            </button>
          </div>

          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden md:block relative">
        <Image
          src="/login.jpg"
          alt="Food delivery"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
