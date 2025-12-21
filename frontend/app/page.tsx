"use client";

import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
export default function Page() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Header />
      <Banner />
      <section className="flex-1 bg-black"></section>
      <Footer />
    </main>
  );
}
