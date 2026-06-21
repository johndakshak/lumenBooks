import Link from "next/link";
import Image from "next/image";
import { getRecommendedBooks } from "@/lib/data";

type RecommendedBooksProps = {
  currentSlug: string;
};

export default async function RecommendedBooks({
  currentSlug,
}: RecommendedBooksProps) {
  const books = await getRecommendedBooks(currentSlug);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {books.map((book) => (
        <Link
          key={book.id}
          href={`/books/${book.slug}`}
          className="rounded-xl bg-indigo-50 p-3 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={book.coverImageUrl}
              alt={book.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-gray-900">
            {book.title}
          </h3>
          <p className="text-xs text-indigo-600">{book.author}</p>
        </Link>
      ))}
    </div>
  );
}