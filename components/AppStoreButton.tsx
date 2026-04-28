import { Apple } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/app/id6762391540";

type Variant = "primary" | "secondary";

export function AppStoreButton({
  variant = "primary",
  className = "",
  label = "Download on the App Store",
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-button)] px-6 py-3.5 text-[15px] font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-hover"
      : "border border-input-border bg-surface text-text-primary hover:border-text-secondary";

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener"
      className={`${base} ${styles} ${className}`}
      aria-label={label}
    >
      <Apple size={18} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

export function AndroidComingSoon({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-[13px] text-text-muted ${className}`}
      aria-label="Android version coming soon"
    >
      Android version coming soon.
    </p>
  );
}
