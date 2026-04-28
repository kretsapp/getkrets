import Link from "next/link";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    eyebrow: "For members",
    price: "0 kr",
    priceNote: "Forever",
    bullets: [
      "Join any Krets you’re invited to",
      "Post, comment, react, vote",
      "Contribute to event albums and birthday capsules",
      "Keep your full history",
    ],
    accent: false,
  },
  {
    name: "Krets Keeper",
    eyebrow: "For hosts",
    price: "59 kr",
    priceNote: "per month, or 499 kr / year",
    bullets: [
      "Everything in Free",
      "Create your own Krets",
      "Host as many circles as you like",
      "60 days free, no card needed",
    ],
    accent: true,
  },
] as const;

export function PricingTeaser() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="light bg-bg px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="pricing-heading"
          className="mb-3 text-center text-[26px] font-bold tracking-tight text-text-primary"
        >
          Free for everyone in your circle
        </h2>
        <p className="mx-auto mb-12 max-w-[480px] text-center text-[15px] leading-relaxed text-text-secondary">
          Members never pay. Hosts try Keeper free for 60 days, then 59 kr per month if they keep going.
        </p>

        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-[var(--radius-card)] p-7 ${
                tier.accent
                  ? "border-2 border-accent bg-surface"
                  : "border border-border bg-surface"
              }`}
            >
              <p className="mb-1 text-[12px] font-semibold uppercase tracking-[1.5px] text-accent">
                {tier.eyebrow}
              </p>
              <h3 className="mb-4 text-[20px] font-bold text-text-primary">
                {tier.name}
              </h3>
              <div className="mb-5">
                <span className="text-[32px] font-bold text-text-primary">
                  {tier.price}
                </span>
                <p className="mt-0.5 text-[13px] text-text-secondary">
                  {tier.priceNote}
                </p>
              </div>
              <ul className="space-y-2.5">
                {tier.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-[14px] leading-relaxed text-text-body"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="text-[14px] font-semibold text-accent hover:text-accent-hover"
          >
            See full pricing and FAQ →
          </Link>
        </div>
      </div>
    </section>
  );
}
