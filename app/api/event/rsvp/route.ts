import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token, guestName, status, guestId } = body;

    if (!token || !guestName || !status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!["going", "maybe", "not_going"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    if (typeof guestName !== "string" || guestName.trim().length < 1) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 },
      );
    }

    const supabase = getSupabaseClient();

    const { data, error } = await supabase.rpc("submit_guest_rsvp", {
      p_token: token,
      p_guest_name: guestName.trim(),
      p_status: status,
      p_guest_id: guestId ?? null,
    });

    if (error) {
      // Map Postgres error codes to HTTP statuses
      if (error.code === "P0002") {
        return NextResponse.json(
          { error: "Event not found" },
          { status: 404 },
        );
      }
      if (error.code === "P0003") {
        return NextResponse.json(
          { error: "Event has ended" },
          { status: 410 },
        );
      }
      if (error.code === "P0004" || error.code === "P0005") {
        return NextResponse.json(
          { error: error.message },
          { status: 400 },
        );
      }
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 },
      );
    }

    return NextResponse.json({ guestId: data });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 },
    );
  }
}
