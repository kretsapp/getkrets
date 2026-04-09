import { Users, Heart, Clock } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Your family",
    description:
      "Share photos, videos, and updates in a private timeline. No strangers, no followers, no likes. Just your people.",
  },
  {
    icon: Heart,
    title: "Your friends",
    description:
      "A separate space for your college crew, your couple's group, your close friends. Each circle gets its own timeline.",
  },
  {
    icon: Clock,
    title: "Your memories",
    description:
      "Everything stays chronological. Scroll back through years of moments, exactly as they happened. Nothing gets buried by an algorithm.",
  },
] as const;

export function ValueProps() {
  return (
    <section
      aria-labelledby="value-heading"
      className="light bg-bg px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="value-heading"
          className="mb-12 text-center text-[23px] font-bold text-text-primary"
        >
          All your circles. One app.
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[var(--radius-card)] bg-surface p-5"
            >
              <card.icon
                size={24}
                className="mb-3 text-accent"
                aria-hidden="true"
              />
              <h3 className="mb-2 text-[15px] font-bold text-text-primary">
                {card.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-text-secondary">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
