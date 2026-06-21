import Image from "next/image";
import { getBestSellers } from "@/lib/data";

export default async function BestSellers() {
  const books = await getBestSellers();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-10 text-center text-2xl font-bold text-gray-900">
        Best Seller Books
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="rounded-2xl bg-indigo-50 p-4"
          >
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg bg-gray-200">
              <Image
                src={book.coverImageUrl}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
              <span className="absolute bottom-2 left-2 rounded-md bg-white px-2 py-1 text-sm font-semibold text-indigo-600 shadow">
                ${book.price.toFixed(2)}
              </span>
            </div>

            <h3 className="font-semibold text-gray-900">{book.title}</h3>
            <p className="text-sm text-indigo-600">{book.author}</p>
            <p className="mt-2 text-sm text-gray-600">{book.description}</p>

            <button
              type="button"
              className="mt-4 w-full cursor-pointer rounded-lg bg-black py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}