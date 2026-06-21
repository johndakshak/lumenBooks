import Link from "next/link";
import Image from "next/image";
import { getAllBooks } from "@/lib/data";
import AddToCartButton from "@/app/components/buttons/AddToCartButton";

type BooksPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const { category } = await searchParams;

  const allBooks = await getAllBooks();

  const books = category
    ? allBooks.filter((book) => book.category === category)
    : allBooks;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-10 text-center text-2xl font-bold text-gray-900">
        Catalog
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.slug}`}
            className="rounded-2xl bg-indigo-50 p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
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

            <AddToCartButton />
          </Link>
        ))}
      </div>
    </section>
  );
}