import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log("URL:", url);
console.log("SERVICE:", serviceKey);

export const supabaseServer = createClient(
  url!,
  serviceKey!
);