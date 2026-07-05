"use client";

import { useState } from "react";
import { LETTER_COLORS } from "@/constants/colors";
import { createLetter } from "@/services/letterService";

export default function SubmitForm() {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [agree, setAgree] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate
    if (!recipient.trim()) {
      setError("Vui lòng nhập người nhận.");
      return;
    }

    if (!message.trim()) {
      setError("Vui lòng nhập lời nhắn.");
      return;
    }

    if (message.trim().length < 10) {
      setError("Lời nhắn cần có ít nhất 10 ký tự.");
      return;
    }

    if (!color) {
      setError("Hãy chọn một màu cảm xúc.");
      return;
    }

    if (!agree) {
      setError("Bạn cần đồng ý trước khi gửi.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const { data, error } = await createLetter({
        recipient,
        message,
        color,
      });

      if (error) {
        console.error(error);

        setError(error.error ?? "Không thể gửi thư.");
        return;
      }

      console.log("Inserted:", data);

      // Reset form
      setRecipient("");
      setMessage("");
      setColor("");
      setAgree(false);

      alert("❤️ Lá thư của bạn đã được gửi và đang chờ kiểm duyệt.");
    } catch (err) {
      console.error(err);

      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-8">

      {/* Người nhận */}
      <div>
        <label
          htmlFor="recipient"
          className="mb-2 block text-base font-semibold text-zinc-800"
        >
          Người nhận
        </label>

        <input
          id="recipient"
          type="text"
          placeholder="Ví dụ: 'Mẹ', 'Em', 'Chính mình của năm 18 tuổi'..."
          maxLength={50}
          value={recipient}
          onChange={(e) => {
            setRecipient(e.target.value);
            setError("");
          }}
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-4 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 focus:outline-none"
        />

        <div className="mt-2 text-right text-sm text-zinc-500">
          {recipient.length}/50
        </div>
      </div>

      {/* Lời nhắn */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-base font-semibold text-zinc-800"
        >
          Lời nhắn
        </label>

        <textarea
          id="message"
          rows={7}
          placeholder="Viết điều bạn chưa từng nói..."
          maxLength={1000}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setError("");
          }}
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-4 text-zinc-900 placeholder:text-zinc-400 resize-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 focus:outline-none"
        />

        <div className="mt-2 flex justify-between text-sm text-zinc-500">
          <span>Tối đa 1000 ký tự</span>
          <span>{message.length}/1000</span>
        </div>
      </div>

      {/* Màu cảm xúc */}
      <div>
        <label className="mb-3 block text-base font-semibold text-zinc-800">
          Màu cảm xúc
        </label>

        <div className="flex flex-wrap gap-3">
          {LETTER_COLORS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setColor(item.value);
                setError("");
              }}
              className={`h-10 w-10 rounded-full border-2 transition ${
                color === item.value
                  ? "scale-110 border-zinc-900"
                  : "border-zinc-300 hover:scale-105"
              }`}
              style={{ backgroundColor: item.value }}
            />
          ))}
        </div>
      </div>

      {/* Đồng ý */}
      <div className="flex items-start gap-3">
        <input
          id="agree"
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked);
            setError("");
          }}
          className="mt-1 h-4 w-4"
        />

        <label
          htmlFor="agree"
          className="text-sm leading-6 text-zinc-600"
        >
          Tôi đồng ý công khai lá thư này sau khi được kiểm duyệt.
        </label>
      </div>

      {/* Lỗi */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-zinc-900 py-4 font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Đang gửi..." : "Gửi thư"}
      </button>

    </form>
  );
}