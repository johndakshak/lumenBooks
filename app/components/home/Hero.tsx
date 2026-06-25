"use client";

import Link from "next/link";
import Image from "next/image";
import { useBookSearch } from "@/lib/hooks/useBookSearch";

export default function Hero() {
  const { query, setQuery, results, isOpen, containerRef } = useBookSearch();

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-right md:bg-center"
        style={{ backgroundImage: "url('/images/Background.png')" }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-32">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl">
            Buy and sell your books{" "}
            <span className="text-[#6aa2ca]">for the best prices</span>
          </h1>
          <p className="mt-6 max-w-md text-white">
            Find and read more you&apos;ll love, and keep track of the books
            you want to read. Be part of the world&apos;s largest community
            of book lovers on Lumen Books.
          </p>

          <div ref={containerRef} className="relative mt-8 max-w-md">
            <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm ring-1 ring-gray-200">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for Books..."
                className="w-full bg-transparent text-sm text-gray-500 placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            {isOpen && (
              <div className="absolute left-0 top-full mt-2 w-full rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-200">
                {results.length === 0 ? (
                  <p className="px-3 py-2 text-sm text-gray-500">
                    No books found.
                  </p>
                ) : (
                  results.map((book) => (
                    <Link
                      key={book.id}
                      href={`/books/${book.slug}`}
                      className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-50"
                    >
                      <div className="relative h-12 w-9 flex-shrink-0 overflow-hidden rounded bg-gray-100">
                        <Image
                          src={book.coverImageUrl}
                          alt={book.title}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {book.title}
                        </p>
                        <p className="text-xs text-gray-500">{book.author}</p>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}