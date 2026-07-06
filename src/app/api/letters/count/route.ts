import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function GET() {
  const { count, error } = await supabaseServer
    .from("letters")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", "approved");

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    count: count ?? 0,
  });
}