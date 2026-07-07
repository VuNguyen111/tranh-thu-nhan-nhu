import Link from "next/link";
import { Heart, House, PenLine } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 md:h-18 max-w-[1500px] items-center justify-between px-4 md:px-8">
        <Link
            href="/"
            className="font-logo text-3xl md:text-3xl whitespace-nowrap font-semibold tracking-wide text-zinc-900 transition-opacity hover:opacity-80"
            >
          Tranh thủ Nhắn nhủ ♡
        </Link>

        <nav className="flex items-center gap-3 md:gap-8 text-xs md:text-sm">
          <Link
            href="/"
            className="flex items-center gap-1 md:gap-2 whitespace-nowrap hover:text-zinc-900"
          >
            <House size={18} />
            Trang chủ
          </Link>

          <Link
            href="/submit"
            className="flex items-center gap-1 md:gap-2 whitespace-nowrap hover:text-zinc-900"
          >
            <PenLine size={18} />
            Gửi thư
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-1 md:gap-2 whitespace-nowrap hover:text-zinc-900"
          >
            <Heart size={18} />
            Về chúng mình
          </Link>
        </nav>
      </div>
    </header>
  );
}