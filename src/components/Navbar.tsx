import Link from "next/link";
import { Heart, House, PenLine } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-logo text-2xl md:text-3xl font-semibold tracking-wide text-zinc-900 transition-opacity hover:opacity-80 whitespace-nowrap"
        >
          <span className="md:hidden">TTNN ♡</span>
          <span className="hidden md:inline">
            Tranh thủ Nhắn nhủ ♡
          </span>
        </Link>

        {/* Navigation */}
        <nav className="ml-auto flex items-center gap-4 md:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-700 transition hover:text-zinc-900"
          >
            <House size={18} />
            <span className="hidden md:inline text-sm">
              Trang chủ
            </span>
          </Link>

          <Link
            href="/submit"
            className="flex items-center gap-2 text-zinc-700 transition hover:text-zinc-900"
          >
            <PenLine size={18} />
            <span className="hidden md:inline text-sm">
              Gửi thư
            </span>
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 text-zinc-700 transition hover:text-zinc-900"
          >
            <Heart size={18} />
            <span className="hidden md:inline text-sm">
              Về chúng mình
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}