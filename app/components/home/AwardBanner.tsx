import Image from "next/image";
import ExploreButton from "../buttons/ExploreNow";

export default function AwardsBanner() {
  return (
    <section className="w-full bg-yellow-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-12 px-6 py-12">
        {/* Left: heading + button */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            2025 National Book Awards for Fiction Shortlist
          </h2>

          <div className="mt-4">
            <ExploreButton />
          </div>
        </div>

        {/* Right: trophy illustration */}
        <div className="relative hidden h-40 w-40 flex-shrink-0 sm:block">
          <Image
            src="/images/Award.png"
            alt="Trophy on a stack of books"
            fill
            sizes="200px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}