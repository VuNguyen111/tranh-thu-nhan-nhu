import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

console.log("URL =", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("KEY =", process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.slice(0, 25));