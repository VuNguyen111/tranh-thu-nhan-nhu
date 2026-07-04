export default function Header() {
  return (
    <header className="text-center py-10">
      <h1 className="text-5xl font-bold text-zinc-900">
        Tranh thủ Nhắn nhủ
      </h1>

      <p className="mt-4 text-lg text-zinc-600">
        Viết điều chưa từng nói.
      </p>
        <a
        href="/submit"
        className="inline-block mt-8 rounded-full bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-700"
        >
        + Viết thư
        </a>      
    </header>

    
  );
}