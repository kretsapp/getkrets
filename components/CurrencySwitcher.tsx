"use client";

import { useCurrency } from "./CurrencyProvider";
import { CURRENCIES } from "@/lib/pricing";

export function CurrencySwitcher({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      role="radiogroup"
      aria-label="Choose currency"
      className={`inline-flex items-center rounded-full border border-input-border bg-surface p-1 text-[12px] font-semibold ${className}`}
    >
      {CURRENCIES.map((c) => {
        const active = c.code === currency;
        return (
          <button
            key={c.code}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setCurrency(c.code)}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              active
                ? "bg-accent text-white"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
