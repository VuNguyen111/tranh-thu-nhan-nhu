import { Letter } from "@/types/letter";

interface Props {
  letter: Letter;
}

export default function LetterCard({ letter }: Props) {
  return (
    <article
      className="rounded-2xl bg-white p-6 shadow-sm border border-zinc-200 transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: letter.color }}
        />

        <h2 className="font-semibold text-lg text-zinc-900">
          Gửi {letter.recipient}
        </h2>
      </div>

      <p className="text-zinc-700 leading-7 line-clamp-5">
        {letter.message}
      </p>

      <p className="mt-6 text-sm text-zinc-400">
        {letter.createdAt}
      </p>
    </article>
  );
}