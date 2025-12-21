"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-300">
      <div className="bg-[#f04444] overflow-hidden">
        <div className="whitespace-nowrap animate-marquee py-3 text-white font-semibold text-lg">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-6">
              Fresh fast delivered
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="NomNom" width={40} height={40} />
            <div>
              <p className="text-white font-semibold">NomNom</p>
              <p className="text-xs text-gray-400">Swift delivery</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-gray-500 mb-4">NOMNOM</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Contact us</li>
            <li>Delivery zone</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-500 mb-4">MENU</h4>
          <ul className="space-y-2 text-sm">
            <li>Appetizers</li>
            <li>Salads</li>
            <li>Pizzas</li>
            <li>Main dishes</li>
            <li>Desserts</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-500 mb-4 opacity-0">MENU</h4>
          <ul className="space-y-2 text-sm">
            <li>Side dish</li>
            <li>Brunch</li>
            <li>Desserts</li>
            <li>Beverages</li>
            <li>Fish & Sea foods</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-500 mb-4">FOLLOW US</h4>
          <div className="flex gap-4 text-white text-xl">
            <span className="cursor-pointer">f</span>
            <span className="cursor-pointer">◎</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between text-xs text-gray-500 gap-4">
          <p>Copy right 2024 © Nomnom LLC</p>
          <div className="flex gap-6">
            <span>Privacy policy</span>
            <span>Terms and condition</span>
            <span>Cookie policy</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </footer>
  );
}
