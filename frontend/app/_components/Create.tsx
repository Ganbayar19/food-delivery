"use client";
export default function RegisterPage() {
  return (
    <div className="w-full bg-gray-100 py-16 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl overflow-hidden shadow-lg ">
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold mb-2">Create your account</h1>
          <p className="text-gray-500 mb-6">
            Sign up to explore your favorite dishes.
          </p>

          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-300 rounded-md px-4 py-4 mb-4 focus:outline-none focus:ring-black"
          />

          <button className="bg-gray-300 text-gray-600 py-3 rounded-md cursor-not-allowed">
            Let's Go
          </button>
          <p className="text-sm text-gray-500 md-4">
            Already have an account?
            <span className="text-[#2563EB] cursor-pointer underline">
              Log in
            </span>
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="./Delivery.png"
            alt="Delivery"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
