"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[280px] overflow-hidden bg-black">
      <Image
        src="/banner-bg.png"
        alt="Banner background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 h-full flex items-center pl-12">
        <div>
          <h1 className="text-white text-[48px] leading-tight font-extrabold">
            TODAY’S
            <br />
            OFFER!
          </h1>
          <div className="mt-4 inline-flex items-center bg-[#ff4d3f] rounded-full px-6 py-2">
            <span className="text-white font-bold tracking-wide">
              STEAK SOCIETY
            </span>
          </div>
        </div>
      </div>
      <Image
        src="/plate.png"
        alt="Main plate"
        width={420}
        height={420}
        className="absolute right-[220px] top-1/2 -translate-y-1/2 z-20"
      />
      <Image
        src="/dessert.png"
        alt="Dessert"
        width={150}
        height={150}
        className="absolute right-[70px] top-[28px] z-30"
      />
      <Image
        src="/plus.png"
        alt="Plus"
        width={34}
        height={34}
        className="absolute right-[250px] top-[78px] z-40"
      />
    </section>
  );
}
