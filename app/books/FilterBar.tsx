"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = ["Cooking", "Mystery", "Historical"];

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");
  const currentSort = searchParams.get("sort");

  function updateParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/books?${params.toString()}`);
  }

  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => updateParam("category", null)}
        className={`rounded-full px-4 py-1.5 text-sm font-medium ${
          !currentCategory
            ? "bg-black text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => updateParam("category", cat)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium ${
            currentCategory === cat
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}

      <div className="ml-auto">
        <select
          value={currentSort ?? ""}
          onChange={(e) => updateParam("sort", e.target.value || null)}
          className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700"
        >
          <option value="">Sort by</option>
          <option value="price">Price: Low to High</option>
          <option value="newest">Newest First</option>
        </select>
      </div>
    </div>
  );
}