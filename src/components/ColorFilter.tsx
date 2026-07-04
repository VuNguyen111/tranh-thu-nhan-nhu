import { LETTER_COLORS } from "@/constants/colors";

export default function ColorFilter() {
  return (
    <div className="flex justify-center gap-4 mt-8">
        {LETTER_COLORS.map((color) => (
        <button
            key={color.name}
            className="w-8 h-8 rounded-full border-2 border-zinc-300 transition hover:scale-110"
            style={{ backgroundColor: color.value }}
        />
        ))}
    </div>
  );
}