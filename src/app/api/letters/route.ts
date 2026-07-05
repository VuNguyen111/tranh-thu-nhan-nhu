import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { recipient, message, color } = body;

    if (!recipient || !message || !color) {
      return NextResponse.json(
        { error: "Thiếu dữ liệu." },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseServer
      .from("letters")
      .insert({
        recipient,
        message,
        color,
        status: "pending",
      })
      .select()
      .single();

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data);

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}