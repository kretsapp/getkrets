"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useCurrency } from "@/components/CurrencyProvider";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { PRICES } from "@/lib/pricing";

export function PricingTeaser() {
  const { currency } = useCurrency();
  const monthly = PRICES.keeperMonthly[currency];
  const yearly = PRICES.keeperYearly[currency];

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
        <p className="mx-auto mb-8 max-w-[480px] text-center text-[15px] leading-relaxed text-text-secondary">
          Members never pay. Hosts try Krets Plus free for 60 days, no card needed.
        </p>

        <div className="mb-10 flex justify-center">
          <CurrencySwitcher />
        </div>

        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          <div className="rounded-[var(--radius-card)] border border-border bg-surface p-7">
            <p className="mb-1 text-[12px] font-semibold uppercase tracking-[1.5px] text-accent">
              For members
            </p>
            <h3 className="mb-4 text-[20px] font-bold text-text-primary">
              Free
            </h3>
            <div className="mb-5">
              <span className="text-[32px] font-bold text-text-primary">
                Free
              </span>
              <p className="mt-0.5 text-[13px] text-text-secondary">
                Forever, no catch
              </p>
            </div>
            <ul className="space-y-2.5">
              {[
                "Join any Krets you’re invited to",
                "Post, comment, react, vote",
                "Contribute to event albums and birthday capsules",
                "Keep your full history",
              ].map((bullet) => (
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

          <div className="rounded-[var(--radius-card)] border-2 border-accent bg-surface p-7">
            <p className="mb-1 text-[12px] font-semibold uppercase tracking-[1.5px] text-accent">
              For hosts
            </p>
            <h3 className="mb-4 text-[20px] font-bold text-text-primary">
              Krets Plus
            </h3>
            <div className="mb-5">
              <span className="text-[32px] font-bold text-text-primary">
                {monthly}
              </span>
              <p className="mt-0.5 text-[13px] text-text-secondary">
                per month, or {yearly} per year
              </p>
            </div>
            <ul className="space-y-2.5">
              {[
                "Everything in Free",
                "Create your own Krets",
                "Host as many circles as you like",
                "60 days free, no card needed",
              ].map((bullet) => (
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
