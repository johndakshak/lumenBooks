export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Background.png')" }}
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-black md:text-6xl">
            Buy and sell your books{" "}
            <span className="text-[#6aa2ca]">for the best prices</span>
          </h1>

          <p className="mt-6 max-w-md text-white">
            Find and read more you&apos;ll love, and keep track of the books
            you want to read. Be part of the world&apos;s largest community
            of book lovers on Lumen Books.
          </p>

          <div className="mt-8 flex max-w-md items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm ring-1 ring-gray-200">
            <input
              type="text"
              placeholder="Search for Books..."
              className="w-full bg-transparent text-sm text-gray-500 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}