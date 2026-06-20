import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <img src="/images/lumen_books_logo_v2c.png" alt="" />
            <p className="mt-3 text-sm text-gray-400">
              Books Delivered. Imagination Unlimited.
            </p>
          </div>

        <div>
        <h3 className="text-lg font-bold">Quick Links</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>
            <Link href="/" className="hover:text-white">
                Home
            </Link>
            </li>
            <li>
            <Link href="/books" className="hover:text-white">
                Books
            </Link>
            </li>
            <li>
            <Link href="/login" className="hover:text-white">
                Login
            </Link>
            </li>
            <li>
            <Link href="/dashboard" className="hover:text-white">
                Dashboard
            </Link>
            </li>
        </ul>
        </div>

          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>Email: mssonukr@gmail.com</li>
              <li>Phone: +91 7061543815</li>
              <li>MMEC, Mullana - 133207</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">We Accept</h3>
            <div className="mt-3 flex items-center gap-3">
              <span className="rounded bg-white px-2 py-1 text-xs font-bold italic text-blue-700">
                VISA
              </span>
              <span className="rounded bg-white px-2 py-1 text-xs font-bold text-red-600">
                MasterCard
              </span>
              <span className="rounded bg-white px-2 py-1 text-xs font-bold text-blue-500">
                AMEX
              </span>
            </div>
          </div>
        </div>

        <hr className="my-8 border-dashed border-gray-700" />

        <p className="text-center text-sm text-gray-400">
          © 2025 Books. All rights reserved. | Made By Sonu ❤️
        </p>
      </div>
    </footer>
  );
}