"use client";

export default function CreateAccount({ goLogin }: { goLogin: () => void }) {
  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-8">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-semibold mb-2">Create your account</h1>
          <p className="text-gray-500 mb-6 text-sm">
            Sign up to explore your favorite dishes.
          </p>

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full mb-4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
          />

          <button
            onClick={goLogin}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Create account
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <span
              onClick={goLogin}
              className="text-red-500 cursor-pointer hover:underline"
            >
              Log in
            </span>
          </p>
        </div>
      </div>
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
          className="h-[90%] w-[90%] object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
