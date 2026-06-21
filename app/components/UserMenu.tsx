"use client";

import { useState } from "react";
import { logout } from "@/app/dashboard/actions";

type UserMenuProps = {
  name: string;
};

export default function UserMenu({ name }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white"
      >
        {initial}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
          <p className="px-4 py-1 text-sm font-medium text-gray-900">{name}</p>
          <form action={logout}>
            <button
              type="submit"
              className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-50"
            >
              Logout
            </button>
          </form>
        </div>
      )}
    </div>
  );
}