"use client";

export default function AddToCartButton() {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        // Cart logic goes here later
      }}
      className="mt-4 w-full cursor-pointer rounded-lg bg-black py-2 text-sm font-medium text-white hover:bg-gray-800"
    >
      Add To Cart
    </button>
  );
}