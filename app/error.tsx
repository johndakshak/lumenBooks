"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl font-bold text-gray-900">
        Something went wrong
      </h1>
      <p className="mt-2 max-w-md text-gray-600">
        We hit an unexpected error. You can try again, or head back to the
        homepage.
      </p>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Try again
        </button>
        
        <a  href="/"
          className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Go home
        </a>
      </div>
    </div>
  );
}