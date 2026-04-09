import { NextResponse } from "next/server";
import { isValidEmail, ERRORS } from "@/lib/validation";
import { subscribeEmail } from "@/lib/klaviyo";

export async function POST(request: Request) {
  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: ERRORS.GENERIC }, { status: 400 });
  }

  const email = body.email?.trim();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: ERRORS.INVALID_EMAIL },
      { status: 400 }
    );
  }

  const result = await subscribeEmail(email);

  if (result.error === "service_unavailable") {
    return NextResponse.json({ error: ERRORS.UNAVAILABLE }, { status: 503 });
  }

  if (!result.ok) {
    return NextResponse.json({ error: ERRORS.GENERIC }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
