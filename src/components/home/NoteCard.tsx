interface Props {
  recipient: string;
  message: string;
  color: string;
}

export default function NoteCard({
  recipient,
  message,
  color,
}: Props) {
  return (
    <article
      className="rounded-xl p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
      style={{
        backgroundColor: color,
      }}
    >
      <h2 className="mb-4 text-2xl font-semibold">
        Gửi {recipient}
      </h2>

      <p className="line-clamp-6 whitespace-pre-wrap text-zinc-700">
        {message}
      </p>

      <hr className="mt-6 border-black/10" />
    </article>
  );
}