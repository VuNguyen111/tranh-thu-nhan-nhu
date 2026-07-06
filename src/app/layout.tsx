import type { Metadata } from "next";
import "./globals.css";
import { inter, logo } from "./fonts";

export const metadata: Metadata = {
  title: "Tranh thủ Nhắn nhủ",
  description: "Nơi những lời chưa kịp nói được cất lên.",

  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${logo.variable}`}
    >
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}