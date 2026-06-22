import { cookies } from "next/headers";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import NewBookForm from "./NewBookForm";

export default async function NewBookPage() {
  const cookieStore = await cookies();
  const sellerName = cookieStore.get("sellerName")?.value ?? "Seller";

  return (
    <>
      <Navbar variant="dashboard" sellerName={sellerName} />
      <main className="pt-20">
        <section className="mx-auto max-w-lg px-6 py-16">
          <h1 className="text-2xl font-bold text-gray-900">Add a New Book</h1>
          <p className="mt-2 text-sm text-gray-600">
            Fill in the details below to list a new book.
          </p>

          <NewBookForm />
        </section>
      </main>
      <Footer />
    </>
  );
}