import Link from "next/link";
import { Heart, House, PenLine } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-6">
        <Link
            href="/"
            className="font-logo text-3xl font-semibold tracking-wide text-zinc-900 transition-opacity hover:opacity-80"
            >
          Tranh thủ Nhắn nhủ ♡
        </Link>

        <nav className="flex items-center gap-8 text-sm">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-zinc-900"
          >
            <House size={18} />
            Trang chủ
          </Link>

          <Link
            href="/submit"
            className="flex items-center gap-2 hover:text-zinc-900"
          >
            <PenLine size={18} />
            Gửi thư
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 hover:text-zinc-900"
          >
            <Heart size={18} />
            Về chúng mình
          </Link>
        </nav>
      </div>
    </header>
  );
}