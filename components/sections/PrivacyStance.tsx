import { Lock, EyeOff, Database, Download } from "lucide-react";

const points = [
  {
    icon: Lock,
    title: "Invite-only by default",
    description:
      "There’s no public discovery, no recommended circles, no way to land on your Krets without a code.",
  },
  {
    icon: EyeOff,
    title: "No followers, no profiles",
    description:
      "We don’t show counts, ranks, or public bios. The only people who see you are the people you let in.",
  },
  {
    icon: Database,
    title: "Your data, your rules",
    description:
      "We don’t sell anything to anyone. Photos and posts belong to you, not to an ad network.",
  },
  {
    icon: Download,
    title: "Export anytime",
    description:
      "Take everything with you whenever you want. Krets is a place to keep memories, not lock them up.",
  },
] as const;

export function PrivacyStance() {
  return (
    <section
      aria-labelledby="privacy-heading"
      className="bg-deep px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="privacy-heading"
          className="mb-3 text-center text-[26px] font-bold tracking-tight text-text-primary"
        >
          Built private. Stays private.
        </h2>
        <p className="mx-auto mb-12 max-w-[460px] text-center text-[15px] leading-relaxed text-text-secondary">
          We made Krets the way we wished other apps worked.
        </p>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point.title}
              className="flex gap-3 rounded-[var(--radius-card)] bg-surface p-5"
            >
              <point.icon
                size={20}
                className="mt-0.5 shrink-0 text-accent"
                aria-hidden="true"
              />
              <div>
                <h3 className="mb-1 text-[15px] font-bold text-text-primary">
                  {point.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-text-secondary">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
