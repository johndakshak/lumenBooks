import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-100 bg-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src="/images/lumen_books_logo_black.png"
            alt="Lumen Books logo"
            width={250}
            height={0}
            priority
          />
        </Link>

        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/books" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
              Books
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
              Login
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
              Dashboard
            </Link>
          </li>
          <li>

          </li>
        </ul>

        <div>
            <Link href="/cart" aria-label="Cart" className="text-gray-700 hover:text-indigo-600">
              <ShoppingCart size={22} weight="bold" />
            </Link>          
        </div>
      </nav>
    </header>
  );
}