interface Props {
  totalLetters: number;
}

export default function Hero({
  totalLetters,
}: Props) {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fffdf9] to-transparent"/>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h1 
          className="text-5xl font-bold tracking-tight text-zinc-900">
          Những lời chưa kịp gửi
          <span className="ml-2 text-rose-400">❤︎⁠</span>
        </h1>

        <p className="mt-5 text-lg text-zinc-500">
          Ở đây, bạn có thể chia sẻ những điều còn giữ mãi trong lòng.
        </p>

        <div className="mt-8">
          <p className="text-4xl font-bold text-zinc-800">
            {totalLetters}
          </p>

          <p className="mt-2 text-sm tracking-wide text-zinc-500 uppercase">
            lá thư đã được chia sẻ
          </p>
        </div>
      </div>
    </section>
  );
}