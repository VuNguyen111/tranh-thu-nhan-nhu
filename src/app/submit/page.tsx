import Navbar from "@/components/Navbar";
import SubmitForm from "@/components/submit/SubmitForm";
import Footer from "@/components/Footer";

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-lg">
          <h1 className="text-3xl font-bold text-zinc-900">
            Viết một lời nhắn
          </h1>

          <p className="mt-2 text-zinc-600">
            Lá thư của bạn sẽ được kiểm duyệt trước khi xuất hiện công khai.
          </p>

          <SubmitForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}