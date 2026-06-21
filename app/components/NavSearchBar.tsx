"use client";

import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useBookSearch } from "@/lib/hooks/useBookSearch";

export default function NavSearchBar() {
  const { query, setQuery, results, isOpen, containerRef } = useBookSearch();

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-gray-300">
        <MagnifyingGlass size={18} className="text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for Books..."
          className="w-70 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-80 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-200">
          {results.length === 0 ? (
            <p className="px-3 py-2 text-sm text-gray-500">No books found.</p>
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
                  <p className="text-sm font-medium text-gray-900">{book.title}</p>
                  <p className="text-xs text-gray-500">{book.author}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}