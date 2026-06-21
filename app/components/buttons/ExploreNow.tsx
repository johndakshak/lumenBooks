"use client";

import { useRouter } from "next/navigation";

export default function ExploreButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/books")}
      className="mt-8 inline-block rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-600 cursor-pointer"
    >
      Explore Now
    </button>
  );
}