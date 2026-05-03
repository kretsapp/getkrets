"use client";

import { useCurrency } from "@/components/CurrencyProvider";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { PRICES } from "@/lib/pricing";

export function PricingPlans() {
  const { currency } = useCurrency();
  const monthly = PRICES.keeperMonthly[currency];
  const yearly = PRICES.keeperYearly[currency];
  const founding = PRICES.foundingMonthly[currency];

  return (
    <section className="light bg-bg px-6 py-16 md:py-20">
      <div className="mb-10 flex justify-center">
        <CurrencySwitcher />
      </div>

      <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
        <div className="rounded-[var(--radius-card)] border border-border bg-surface p-7">
          <p className="mb-1 text-[12px] font-semibold uppercase tracking-[1.5px] text-text-muted">
            For members
          </p>
          <h2 className="mb-4 text-[22px] font-bold text-text-primary">Free</h2>
          <div className="mb-1">
            <span className="text-[40px] font-bold text-text-primary">Free</span>
          </div>
          <p className="mb-6 text-[13px] text-text-secondary">Forever, no catch.</p>
          <p className="text-[14px] leading-relaxed text-text-body">
            Anyone you invite joins free and stays free. Post, comment, react, contribute to albums and capsules. Keep your full history.
          </p>
        </div>

        <div className="rounded-[var(--radius-card)] border-2 border-accent bg-surface p-7">
          <p className="mb-1 text-[12px] font-semibold uppercase tracking-[1.5px] text-accent">
            For hosts
          </p>
          <h2 className="mb-4 text-[22px] font-bold text-text-primary">
            Krets Plus
          </h2>
          <div className="mb-1 flex items-baseline gap-2">
            <span className="text-[40px] font-bold text-text-primary">
              {monthly}
            </span>
            <span className="text-[14px] text-text-secondary">/ month</span>
          </div>
          <p className="mb-6 text-[13px] text-text-secondary">
            Or {yearly} per year (save about 30%)
          </p>
          <p className="mb-3 text-[14px] leading-relaxed text-text-body">
            Everything in Free, plus the ability to create your own circles and host the people who matter to you.
          </p>
          <p className="text-[13px] font-semibold text-accent">
            60 days free, no card needed.
          </p>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-[520px] text-center text-[13px] leading-relaxed text-text-secondary">
        Founding Member rate: the first 100 hosts pay {founding} per month for life. The badge stays with you forever.
      </p>
    </section>
  );
}
