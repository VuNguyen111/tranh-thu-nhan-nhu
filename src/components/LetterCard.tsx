import { Letter } from "@/types/letter";
import { getContrastColor } from "@/utils/getContrastColor";

interface Props {
  letter: Letter;
  onClick?: () => void;
  animate?: boolean;
}

function getRotation(id: string) {
  let hash = 0;

  for (let i = 0; i < id.length; i++) {
    hash += id.charCodeAt(i);
  }

  const rotations = [-0.8, -0.4, 0, 0.4, 0.8];

  return rotations[Math.abs(hash) % rotations.length];
}

function getMargin(id: string) {
  let hash = 0;

  for (let i = 0; i < id.length; i++) {
    hash += id.charCodeAt(i);
  }

  const margins = [0, 4, 8, 12];

  return margins[Math.abs(hash) % margins.length];
}

function getDelay(id: string) {
  let hash = 0;

  for (let i = 0; i < id.length; i++) {
    hash += id.charCodeAt(i);
  }

  const delays = [0, 40, 80, 120, 160];

  return delays[Math.abs(hash) % delays.length];
}

function getTape(id: string) {
  let hash = 0;

  for (let i = 0; i < id.length; i++) {
    hash += id.charCodeAt(i);
  }

  return hash % 5;
}

export default function LetterCard({
  letter,
  onClick,
  animate = false,
}: Props) {
  const textColor = getContrastColor(letter.color);

  const rotation = getRotation(letter.id);
  const marginTop = getMargin(letter.id);
  const delay = getDelay(letter.id);
  const tape = getTape(letter.id);

  return (
    <div
      className={`letter-wrapper ${animate ? "letter-appear" : ""}`}
      style={
        {
          "--rotation": `${rotation}deg`,
          "--hover-rotation": `${rotation >= 0 ? rotation + 0.5 : rotation - 0.5}deg`,
          "--delay": `${delay}ms`,
          marginTop: `${marginTop}px`,
        } as React.CSSProperties
      }
    >
      <article
        onClick={onClick}
        className={`letter-card ${tape === 0 ? "" : `tape tape-${tape}`}`}
        style={{
          backgroundColor: letter.color,
        }}
      >
        <h2
          className="mb-3 truncate text-[24px] font-semibold"
          style={{ color: textColor }}
        >
          Gửi {letter.recipient}
        </h2>

        <p
          className="
            whitespace-pre-wrap
            text-[16px]
            leading-6
            line-clamp-6
            min-h-[8.5rem]
          "
          style={{ color: textColor }}
        >
          {letter.message}
        </p>

        <hr
          className="mt-5"
          style={{
            borderColor: textColor,
            opacity: 0.2,
          }}
        />
      </article>
    </div>
  );
}