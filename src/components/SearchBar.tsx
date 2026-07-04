import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <div className="flex items-center rounded-full bg-white border border-zinc-300 px-4 py-3 shadow-sm">
        <Search className="w-5 h-5 text-zinc-500" />

        <input
          placeholder="Tìm người nhận..."
          className="ml-3 w-full outline-none bg-transparent"
        />
      </div>
    </div>
  );
}