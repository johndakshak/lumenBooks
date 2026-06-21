import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllBooks, getBookBySlug } from "@/lib/data";

export async function generateStaticParams() {
  const books = await getAllBooks();
  return books.map((book) => ({ slug: book.slug }));
}

type BookPageProps = {
  params: Promise<{ slug: string }>;
};


export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="relative h-96 w-full overflow-hidden rounded-xl bg-gray-200">
          <Image
            src={book.coverImageUrl}
            alt={book.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
          <p className="mt-2 text-indigo-600">{book.author}</p>
          <p className="mt-6 text-gray-700">{book.description}</p>
          <p className="mt-6 text-xl font-semibold text-gray-900">
            ${book.price.toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
}