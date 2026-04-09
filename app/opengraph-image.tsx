import { ImageResponse } from "next/og";

export const alt = "Krets — Your inner circles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C1917",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Mark */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 256 256"
          style={{ marginBottom: 24 }}
        >
          <circle
            cx="128"
            cy="128"
            r="106"
            fill="none"
            stroke="#CF5C36"
            strokeWidth="16"
          />
          <circle cx="128" cy="128" r="26" fill="#CF5C36" />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FAFAF9",
            letterSpacing: "-2px",
            marginBottom: 12,
          }}
        >
          Krets
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#A8A29E",
            letterSpacing: "4px",
            textTransform: "uppercase" as const,
            marginBottom: 48,
          }}
        >
          Your inner circles
        </div>

        {/* URL */}
        <div style={{ fontSize: 18, color: "#78716C" }}>getkrets.app</div>
      </div>
    ),
    { ...size }
  );
}
