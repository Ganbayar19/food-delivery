export default function Banner() {
  return (
    <section className="relative h-[260px] bg-black text-white overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1544025162-d76694265947"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative z-10 h-full flex items-center px-12">
        <div>
          <h2 className="text-4xl font-extrabold">
            TODAY’S <span className="text-red-500">OFFER!</span>
          </h2>
          <p className="mt-2 bg-red-600 inline-block px-4 py-1 rounded-full text-sm font-semibold">
            STEAK SOCIETY
          </p>
        </div>
      </div>
    </section>
  );
}
