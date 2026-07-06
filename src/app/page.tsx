"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ColorFilter from "@/components/ColorFilter";
import LetterCard from "@/components/LetterCard";
import LetterModal from "@/components/LetterModal";
import Footer from "@/components/Footer";

import { getLetters } from "@/services/getLetters";
import { getLetterCount } from "@/services/getLetterCount";

import { Letter } from "@/types/letter";

const PAGE_SIZE = 24;

export default function Home() {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const [totalLetters, setTotalLetters] = useState(0);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const [selectedLetter, setSelectedLetter] =
    useState<Letter | null>(null);

  const [animate, setAnimate] = useState(true);

  // Load dữ liệu
  useEffect(() => {
    async function load() {
      try {
        const [letters, count] = await Promise.all([
          getLetters(),
          getLetterCount(),
        ]);

        setLetters(letters);
        setTotalLetters(count.count);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // Animation chỉ chạy lần đầu
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Reset pagination khi tìm kiếm hoặc lọc màu
  // useEffect(() => {
  //   setVisibleCount(PAGE_SIZE);
  // }, [search, selectedColor]);

  const filteredLetters = letters.filter((letter) => {
    const keyword = search.trim().toLowerCase();

    const matchSearch =
      keyword === "" ||
      letter.recipient.toLowerCase().includes(keyword) ||
      letter.message.toLowerCase().includes(keyword);

    const matchColor =
      selectedColor === "" ||
      letter.color === selectedColor;

    return matchSearch && matchColor;
  });

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header totalLetters={totalLetters} />

      <SearchBar
        value={search}
        onChange={(value) => {
          setSearch(value);
          setVisibleCount(PAGE_SIZE);
        }}
      />

      <ColorFilter
        value={selectedColor}
        onChange={(value) => {
          setSelectedColor(value);
          setVisibleCount(PAGE_SIZE);
        }}
      />

      <section className="mx-auto mt-12 max-w-[1500px] px-6">
        {loading ? (
          <p className="text-center text-zinc-500">
            Đang tải thư...
          </p>
        ) : filteredLetters.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-zinc-700">
              Không tìm thấy lá thư nào.
            </p>

            <p className="mt-2 text-zinc-500">
              Hãy thử một từ khóa hoặc màu khác.
            </p>
          </div>
        ) : (
          <>
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-8
                justify-items-center
              "
            >
              {filteredLetters
                .slice(0, visibleCount)
                .map((letter) => (
                  <div
                    key={letter.id}
                    className="w-full max-w-[420px]"
                  >
                    <LetterCard
                      letter={letter}
                      animate={animate}
                      onClick={() => setSelectedLetter(letter)}
                    />
                  </div>
                ))}
            </div>

            {visibleCount < filteredLetters.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={() =>
                    setVisibleCount((prev) => prev + PAGE_SIZE)
                  }
                  className="
                    rounded-full
                    border
                    border-zinc-300
                    bg-white
                    px-8
                    py-3
                    transition
                    hover:bg-zinc-100
                  "
                >
                  Xem thêm
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <Footer />

      <LetterModal
        letter={selectedLetter}
        onClose={() => setSelectedLetter(null)}
      />
    </main>
  );
}