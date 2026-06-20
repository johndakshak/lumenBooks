import Image from "next/image";
import Link from "next/link";
import ExploreButton from "../buttons/ExploreNow";

export default function FindFavorite() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-amber-400">
          <Image
            src="/images/Favorite Book.png"
            alt="Collection of featured books"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-left"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Find Your Favorite
          </h2>
          <h2 className="text-3xl font-bold text-indigo-500 md:text-4xl">
            Book Here!
          </h2>

          <p className="mt-6 max-w-md text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ad
            non reprehenderit. Reiciendis illo iusto incidunt distinctio
            exercitationem officiis dicta dolores dolorem ea! Non saepe,
            voluptatum cupiditate beatae in dolore!
          </p>

          <div className="mt-8 flex gap-10">
            <div>
              <p className="text-2xl font-bold text-gray-900">800+</p>
              <p className="text-sm text-gray-500">Book Listing</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">550+</p>
              <p className="text-sm text-gray-500">Register User</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1,200+</p>
              <p className="text-sm text-gray-500">Books Sold</p>
            </div>
          </div>

          <ExploreButton />
        </div>
      </div>
    </section>
  );
}