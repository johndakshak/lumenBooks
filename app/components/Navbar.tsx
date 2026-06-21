import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import NavSearchBar from "./NavSearchBar";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0  z-10 w-full bg-[#6aa2ca]/30 backdrop-blur-sm">    
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4">
  
        <div>
          <Link href="/">
            <Image
              src="/images/lumen_books_logo_black.png"
              alt="Lumen Books logo"
              width={250}
              height={60}
              priority
            />
          </Link>
        </div>

        <ul className="flex items-center justify-center gap-8">
          <li>
            <Link href="/" className="text-sm font-medium text-black hover:text-[#6aa2ca]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/books" className="text-sm font-medium text-black hover:text-[#6aa2ca]">
              Books
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-sm font-medium text-black hover:text-[#6aa2ca]">
              Login
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-sm font-medium text-black hover:text-[#6aa2ca]">
              Dashboard
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-end gap-4">
          <NavSearchBar />
          <Link href="/cart" aria-label="Cart" className="text-gray-700 hover:text-[#6aa2ca]">
            <ShoppingCart size={22} weight="bold" />
          </Link>
        </div>
      </nav>
    </header>
  );
}