import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="mx-auto max-w-2xl px-6 py-16">
          <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-2 text-gray-600">
            Have a question or feedback? Send us a message and we&apos;ll get
            back to you.
          </p>

          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}