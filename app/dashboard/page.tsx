import { cookies } from "next/headers";
import Image from "next/image";
import { getAllBooks } from "@/lib/data";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("auth")?.value === "true";
  const sellerName = cookieStore.get("sellerName")?.value ?? "Seller";

  const books = await getAllBooks();
  const totalListings = books.length;
  const totalValue = books.reduce((sum, book) => sum + book.price, 0);

  return (
    <>
      <Navbar variant="dashboard" />
      <main className="pt-20">
        {/* Welcome banner */}
        <section className="w-full bg-gray-900 py-12">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl font-bold text-white">
              {isLoggedIn ? `Welcome back, ${sellerName}` : "You are not logged in"}
            </h1>
            <p className="mt-2 text-gray-300">
              Manage your listings and track your store's performance.
            </p>
          </div>
        </section>

        {/* Stat cards */}
        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-indigo-50 p-6">
              <p className="text-sm text-gray-600">Total Listings</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {totalListings}
              </p>
            </div>
            <div className="rounded-2xl bg-indigo-50 p-6">
              <p className="text-sm text-gray-600">Inventory Value</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                ${totalValue.toFixed(2)}
              </p>
            </div>
            <div className="rounded-2xl bg-indigo-50 p-6">
              <p className="text-sm text-gray-600">Categories</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {new Set(books.map((b) => b.category)).size}
              </p>
            </div>
          </div>
        </section>

        {/* Listings */}
        <section className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            Your Listings
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
              <div key={book.id} className="rounded-2xl bg-indigo-50 p-4">
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
                <p className="mt-1 text-xs text-gray-500">{book.category}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}