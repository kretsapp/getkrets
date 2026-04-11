import { ImageResponse } from "next/og";
import { getSupabaseClient } from "@/lib/supabase";
import type { SharedEvent } from "@/lib/types";

export const runtime = "edge";
export const alt = "Krets Event";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function formatDate(targetDate: string, endDate: string | null): string {
  const start = new Date(targetDate + "T00:00:00");
  const opts: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  if (!endDate || endDate === targetDate) {
    return start.toLocaleDateString("en-US", opts);
  }
  const end = new Date(endDate + "T00:00:00");
  const startStr = start.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return `${startStr} – ${end.toLocaleDateString("en-US", opts)}`;
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  let event: SharedEvent | null = null;
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.rpc("get_shared_event", {
      p_token: token,
    });
    if (!error && data) {
      event = data as unknown as SharedEvent;
    }
  } catch {
    // fallback
  }

  if (!event) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1C1917",
            color: "#FAFAF9",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          Krets
        </div>
      ),
      { ...size },
    );
  }

  const goingCount =
    event.member_rsvps.filter((r) => r.status === "going").length +
    event.guest_rsvps.filter((r) => r.status === "going").length;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 60,
          backgroundColor: "#1C1917",
          color: "#FAFAF9",
          position: "relative",
        }}
      >
        {event.cover_image_url && (
          <img
            src={event.cover_image_url}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
            }}
          />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            position: "relative",
          }}
        >
          <span style={{ fontSize: 72 }}>{event.emoji}</span>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 800,
            }}
          >
            {event.title}
          </span>
          <span
            style={{
              fontSize: 24,
              opacity: 0.8,
              marginTop: 4,
            }}
          >
            {formatDate(event.target_date, event.end_date)}
            {goingCount > 0 ? ` · ${goingCount} going` : ""}
          </span>
          <span
            style={{
              fontSize: 16,
              opacity: 0.6,
              marginTop: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            KRETS
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
