"use client";

import { useState } from "react";

export default function CreatePassword() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = (value: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (!regex.test(value)) {
      setError("Weak password. Use letters and numbers.");
    } else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-lg font-semibold mb-1">Create a strong password</h2>

      <p className="text-sm text-gray-500 mb-4">
        Create a strong password with letters, numbers
      </p>
      <input
        type={show ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={handleChange}
        className={`w-full rounded-md border px-3 py-2 text-sm outline-none
          ${
            error
              ? "border-red-500 focus:ring-1 focus:ring-red-500"
              : "border-gray-300 focus:ring-1 focus:ring-black"
          }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      <div className="mt-2 flex items-center gap-2">
        <input type="checkbox" checked={show} onChange={() => setShow(!show)} />
        <span className="text-sm text-gray-600">Show password</span>
      </div>
      <button
        disabled={!!error || password.length === 0}
        className={`mt-4 w-full rounded-md py-2 text-sm font-medium
          ${
            error || !password
              ? "bg-gray-300 text-white cursor-not-allowed"
              : "bg-black text-white"
          }`}
      >
        Let’s Go
      </button>
      <p className="mt-4 text-sm text-gray-500">
        Already have an account?{" "}
        <span className="text-blue-600 cursor-pointer">Log in</span>
      </p>
    </div>
  );
}
