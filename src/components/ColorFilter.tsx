import { LETTER_COLORS } from "@/constants/colors";

interface Props {
  value: string;
  onChange: (color: string) => void;
}

export default function ColorFilter({
  value,
  onChange,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">

      {/* Tất cả */}
      <button
        onClick={() => onChange("")}
        className={`rounded-full border px-4 py-2 text-sm transition ${
          value === ""
            ? "border-zinc-900 bg-zinc-900 text-white"
            : "border-zinc-300 bg-white hover:border-zinc-500"
        }`}
      >
        Tất cả
      </button>

      {LETTER_COLORS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() =>
            onChange(value === item.value ? "" : item.value)
          }
          className={`h-9 w-9 rounded-full border-2 transition ${
            value === item.value
              ? "scale-110 ring-2 ring-zinc-400 scale-110"
              : "border-zinc-300 hover:scale-105"
          }`}
          style={{
            backgroundColor: item.value,
          }}
          aria-label={item.id}
        />
      ))}
    </div>
  );
}