import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export default function NavSearchBar() {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-gray-300">
      <MagnifyingGlass size={18} className="text-gray-400" />
      <input
        type="text"
        placeholder="Search for Books..."
        className="w-70 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
      />
    </div>
  );
}