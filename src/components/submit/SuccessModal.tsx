"use client";

import Link from "next/link";
import { CheckCircle2, PenLine } from "lucide-react";

interface Props {
  open: boolean;
  onWriteAgain: () => void;
}

export default function SuccessModal({
  open,
  onWriteAgain,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="
      fixed inset-0
      z-50
      flex items-center justify-center
      bg-black/40
      p-6
      "
    >
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl text-center">

        <CheckCircle2
          className="mx-auto text-emerald-500"
          size={56}
        />

        <h2 className="mt-5 text-2xl font-bold">
          Lá thư đã được gửi
        </h2>

        <p className="mt-3 leading-7 text-zinc-600">
          Cảm ơn bạn đã chia sẻ.
          <br />
          Lá thư sẽ xuất hiện sau khi được kiểm duyệt.
        </p>

        <div className="mt-8 flex gap-3">

          <button
            onClick={onWriteAgain}
            className="
            flex-1
            rounded-xl
            border
            border-zinc-300
            py-3
            transition
            hover:bg-zinc-50
            "
          >
            <span className="inline-flex items-center gap-2">
              <PenLine size={18} />
              Gửi thêm
            </span>
          </button>

          <Link
            href="/"
            className="
            flex-1
            rounded-xl
            bg-zinc-900
            py-3
            text-white
            transition
            hover:bg-zinc-800
            "
          >
            Về trang chủ
          </Link>

        </div>
      </div>
    </div>
  );
}