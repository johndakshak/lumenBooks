"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";

type MobileMenuProps = {
  variant?: "public" | "dashboard";
};

export default function MobileMenu({ variant = "public" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="text-white"
      >
        {isOpen ? <X size={26} /> : <List size={26} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-black/90 px-6 py-4 backdrop-blur-sm">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/books" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-white">
                Books
              </Link>
            </li>
            {variant === "public" && (
              <>
                <li>
                  <Link href="/login" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-white">
                    Dashboard
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}