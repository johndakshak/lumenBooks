export default function RecommendedBooksSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-xl bg-indigo-50 p-3">
          <div className="h-40 w-full animate-pulse rounded-lg bg-gray-200" />
          <div className="mt-3 h-4 w-3/4 animate-pulse rounded bg-gray-200" />
          <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}