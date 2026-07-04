"use client";

import { useState } from "react";

export default function SubmitForm() {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="mt-8 space-y-8">
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
          placeholder="Ví dụ: Mẹ"
          maxLength={50}
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-zinc-300
            bg-white
            px-4
            py-4
            text-zinc-900
            placeholder:text-zinc-400
            transition
            focus:border-zinc-900
            focus:ring-2
            focus:ring-zinc-200
            focus:outline-none
          "
        />

        <div className="mt-2 text-right text-sm text-zinc-500">
          {recipient.length}/50
        </div>
      </div>

      {/* Nội dung */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-base font-semibold text-zinc-800"
        >
          Lời nhắn
        </label>

        <textarea
          id="message"
          rows={6}
          placeholder="Viết điều bạn chưa từng nói..."
          maxLength={1000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-zinc-300
            bg-white
            px-4
            py-4
            text-zinc-900
            placeholder:text-zinc-400
            resize-none
            transition
            focus:border-zinc-900
            focus:ring-2
            focus:ring-zinc-200
            focus:outline-none
          "
        />

        <div className="mt-2 flex items-center justify-between text-sm text-zinc-500">
          <span>Tối đa 1000 ký tự</span>

          <span>{message.length}/1000</span>
        </div>
      </div>
    </form>
  );
}