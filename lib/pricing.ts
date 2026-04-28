export type Currency = "usd" | "eur" | "gbp" | "sek";

export const CURRENCIES: ReadonlyArray<{ code: Currency; label: string }> = [
  { code: "usd", label: "USD" },
  { code: "eur", label: "EUR" },
  { code: "gbp", label: "GBP" },
  { code: "sek", label: "SEK" },
];

export const PRICES = {
  keeperMonthly: {
    usd: "$4.99",
    eur: "€5.99",
    gbp: "£4.99",
    sek: "59 kr",
  },
  keeperYearly: {
    usd: "$39.99",
    eur: "€44.99",
    gbp: "£39.99",
    sek: "499 kr",
  },
  foundingMonthly: {
    usd: "$2.99",
    eur: "€2.99",
    gbp: "£2.99",
    sek: "39 kr",
  },
} as const;

const EUR_REGIONS = new Set([
  "AT", "BE", "CY", "DE", "EE", "ES", "FI", "FR", "GR", "HR",
  "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK",
]);

export function detectCurrency(): Currency {
  if (typeof navigator === "undefined") return "usd";
  try {
    const region =
      new Intl.Locale(navigator.language).maximize().region ?? "";
    if (region === "SE") return "sek";
    if (region === "GB") return "gbp";
    if (EUR_REGIONS.has(region)) return "eur";
  } catch {
    // fall through
  }
  return "usd";
}

export function isCurrency(value: unknown): value is Currency {
  return value === "usd" || value === "eur" || value === "gbp" || value === "sek";
}
