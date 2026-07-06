import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <article className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">

          <h1 className="text-4xl font-bold text-zinc-900">
            Về Tranh thủ Nhắn nhủ
          </h1>

          <p className="mt-6 leading-8 text-zinc-700">
            Lấy cảm hứng từ{" "}
            <a
                href="https://theunsentproject.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
            >
                The Unsent Project
            </a>
            , Chúng mình hiểu rằng có những lời chúng ta luôn muốn nói, nhưng rồi vì
            ngại ngùng, khoảng cách, hay chỉ đơn giản là thời điểm chưa phù hợp, chúng
            vẫn ở lại trong lòng.
            </p>

          <hr className="my-10 border-zinc-200" />

          <p className="leading-8 text-zinc-700">
            <strong>Tranh thủ Nhắn nhủ</strong> được tạo ra như
            một nơi để những lời chưa kịp gửi có thể được viết xuống.
            Bạn có thể viết cho một người thân,
            một người bạn, một người đã đi xa,
            hay thậm chí là chính mình của nhiều năm trước.
          </p>

          <p className="mt-8 leading-8 text-zinc-700">
            Mỗi lá thư sẽ được kiểm duyệt trước khi xuất hiện công khai,
            nhằm giữ cho không gian này luôn tích cực,
            an toàn và tôn trọng tất cả mọi người.
          </p>

          <p className="mt-8 leading-8 text-zinc-700">
            Hy vọng rằng khi đọc những lá thư ở đây,
            bạn sẽ tìm thấy đâu đó một cảm xúc quen thuộc,
            một sự đồng cảm,
            hoặc đơn giản chỉ là biết rằng
            mình không phải người duy nhất từng có những điều chưa kịp nói.
          </p>

          <hr className="my-10 border-zinc-200" />

          <div className="text-center">
            <p className="text-zinc-600">
              Cảm ơn bạn đã ghé qua.
            </p>

            <p className="mt-3 text-3xl text-rose-400">
              ♡
            </p>
          </div>

        </article>
      </section>

      <Footer />
    </main>
  );
}