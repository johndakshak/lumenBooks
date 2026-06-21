import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllBooks, getBookBySlug } from "@/lib/data";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RecommendedBooks from "./RecommendedBooks";
import RecommendedBooksSkeleton from "./RecommendedBooksSkeleton";

export async function generateStaticParams() {
  const books = await getAllBooks();
  return books.map((book) => ({ slug: book.slug }));
}

type BookPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    return {
      title: "Book Not Found | Lumen Books",
    };
  }

  return {
    title: `${book.title} | Lumen Books`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [{ url: book.coverImageUrl }],
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 py-16 mt-20">
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

        <div className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            Recommended for you
          </h2>
          <Suspense fallback={<RecommendedBooksSkeleton />}>
            <RecommendedBooks currentSlug={book.slug} />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
}