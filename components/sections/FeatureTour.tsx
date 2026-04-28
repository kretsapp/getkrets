import { Camera, CalendarHeart, Sparkles, Lock, Flame } from "lucide-react";

const features = [
  {
    icon: Camera,
    name: "Daily Snap",
    description:
      "A shared photo round each day. Everyone in the Krets contributes one moment, then sees the rest. No pressure, no streaks broken if you skip.",
  },
  {
    icon: CalendarHeart,
    name: "Event Albums",
    description:
      "Every event you create opens a shared album the day it starts. Anyone in the Krets can drop photos in, so the wedding or weekend trip stays in one place instead of scattered across phones.",
  },
  {
    icon: Sparkles,
    name: "Birthday Capsules",
    description:
      "A week before someone's birthday, the group quietly fills a capsule with messages and photos. On the morning of, it opens as one celebratory post.",
  },
  {
    icon: Lock,
    name: "Time Capsules",
    description:
      "Write something now, set a reveal date, and let it surface itself months or years from today. Perfect for letters to your future self or your kids.",
  },
  {
    icon: Flame,
    name: "Recaps and streaks",
    description:
      "Monthly recaps surface your most-loved moments. Streaks gently encourage showing up without making it feel like a chore.",
  },
] as const;

export function FeatureTour() {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-deep px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="features-heading"
          className="mb-3 text-center text-[26px] font-bold tracking-tight text-text-primary"
        >
          More than a photo feed
        </h2>
        <p className="mx-auto mb-14 max-w-[480px] text-center text-[15px] leading-relaxed text-text-secondary">
          The little features that turn a group of contacts into a circle that actually keeps in touch.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex gap-4 rounded-[var(--radius-card)] bg-surface p-6"
            >
              <div className="shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15">
                  <feature.icon
                    size={20}
                    className="text-accent"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <h3 className="mb-1.5 text-[16px] font-bold text-text-primary">
                  {feature.name}
                </h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
