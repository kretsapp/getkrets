import { NextResponse } from "next/server";

export const dynamic = "force-static";

const AASA = {
  applinks: {
    details: [
      {
        appIDs: ["L6YS7PP5XP.com.krets.app"],
        components: [{ "/": "/join/*" }],
      },
    ],
  },
};

export function GET() {
  return NextResponse.json(AASA, {
    headers: { "Cache-Control": "public, max-age=3600" },
  });
}
