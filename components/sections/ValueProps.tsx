import { Users, Gift, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Free for everyone you invite",
    description:
      "Members join your Krets and stay forever, no payment, no nagging. Only the host pays.",
  },
  {
    icon: Gift,
    title: "60 days free, no card",
    description:
      "Hosts get two months to try Krets Plus without entering a payment method. Cancel anytime, keep everything.",
  },
  {
    icon: ShieldCheck,
    title: "No ads, no algorithm, no public anything",
    description:
      "Invite-only by design. No followers, no feed ranking, no strangers. Your photos stay between you and your people.",
  },
] as const;

export function ValueProps() {
  return (
    <section
      id="features"
      aria-labelledby="value-heading"
      className="light bg-bg px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="value-heading"
          className="mb-3 text-center text-[26px] font-bold tracking-tight text-text-primary"
        >
          What makes Krets different
        </h2>
        <p className="mx-auto mb-12 max-w-[460px] text-center text-[15px] leading-relaxed text-text-secondary">
          Built around the people in your life, not the people who pay to reach you.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[var(--radius-card)] bg-surface p-6"
            >
              <card.icon
                size={26}
                className="mb-4 text-accent"
                aria-hidden="true"
              />
              <h3 className="mb-2 text-[16px] font-bold text-text-primary">
                {card.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-text-secondary">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
