import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ColorFilter from "@/components/ColorFilter";
import LetterCard from "@/components/LetterCard";

import { letters } from "@/data/letters";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />

      <SearchBar />

      <ColorFilter />

      <section className="max-w-7xl mx-auto mt-12 px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {letters.map((letter) => (
            <LetterCard
              key={letter.id}
              letter={letter}
            />
          ))}
        </div>
      </section>
    </main>
  );
}