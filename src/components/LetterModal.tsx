"use client";
import { Letter } from "@/types/letter";
import { getContrastColor } from "@/utils/getContrastColor";
import { X } from "lucide-react";
import { useEffect } from "react";

interface Props {
  letter: Letter | null;
  onClose: () => void;
}

export default function LetterModal({
  letter,
  onClose,
}: Props) {

  useEffect(() => {
    if (!letter) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [letter]);

  useEffect(() => {
    if (!letter) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [letter, onClose]);

  if (!letter) return null;

  const textColor = getContrastColor(letter.color);

    return (
    <div
        className="
        fixed inset-0
        z-50
        flex items-center justify-center
        bg-black/40
        p-6
        modal-overlay
        "
        onClick={onClose}
    >
        <div
        onClick={(e) => e.stopPropagation()}
        className="
            relative
            w-full
            max-w-2xl
            max-h-[85vh]
            overflow-y-auto
            rounded-3xl
            p-8
            shadow-2xl
            modal-content
        "
        style={{
            backgroundColor: letter.color,
        }}
        >
        <button
            onClick={onClose}
            aria-label="Đóng"
            className="
            absolute
            right-5
            top-5
            rounded-full
            p-2
            transition
            hover:scale-110
            "
        >
            <X
            size={20}
            style={{ color: textColor }}
            />
        </button>

        <h2
            className="mb-8 text-3xl font-bold"
            style={{ color: textColor }}
        >
            Gửi {letter.recipient}
        </h2>

        <p
            className="whitespace-pre-wrap leading-8"
            style={{ color: textColor }}
        >
            {letter.message}
        </p>

        <hr
            className="mt-8"
            style={{
            borderColor: textColor,
            opacity: 0.2,
            }}
        />
        </div>
    </div>
    );
}