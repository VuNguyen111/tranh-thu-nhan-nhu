import { Inter, Cormorant_Garamond } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const logo = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-logo",
  weight: ["500", "600", "700"],
});