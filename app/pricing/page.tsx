import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { KretsMark } from "@/components/KretsMark";
import { AppStoreButton, AndroidComingSoon } from "@/components/AppStoreButton";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Pricing — Krets",
  description:
    "Krets is free for everyone you invite. Hosts try Krets Keeper free for 60 days, no card needed. After that, 59 kr per month or 499 kr per year.",
  alternates: { canonical: "https://getkrets.app/pricing" },
  openGraph: {
    type: "website",
    url: "https://getkrets.app/pricing",
    siteName: "Krets",
    title: "Pricing — Krets",
    description:
      "Free for everyone you invite. Hosts try Keeper free for 60 days, no card needed.",
  },
};

const comparison = [
  { feature: "Join a Krets you're invited to", free: true, keeper: true },
  { feature: "Post photos, videos, and updates", free: true, keeper: true },
  { feature: "Comment, react, vote in polls", free: true, keeper: true },
  { feature: "Daily Snap rounds", free: true, keeper: true },
  { feature: "Contribute to event albums", free: true, keeper: true },
  { feature: "Add to birthday capsules", free: true, keeper: true },
  { feature: "Monthly recaps and streaks", free: true, keeper: true },
  { feature: "Export your data anytime", free: true, keeper: true },
  { feature: "Create your own Krets", free: false, keeper: true },
  { feature: "Host as many circles as you like", free: false, keeper: true },
  { feature: "Manage members and invite codes", free: false, keeper: true },
] as const;

const faqs = [
  {
    q: "Do members ever pay?",
    a: "No. Anyone you invite to your Krets joins free, forever. Krets Keeper is only required to create a circle, not to be in one.",
  },
  {
    q: "What happens after the 60-day trial?",
    a: "If you don't subscribe, your Krets pauses for new posts but everything you and your members have shared stays exactly where it is. Pick up later by subscribing, or export your data anytime.",
  },
  {
    q: "Do I need to enter a card to start the trial?",
    a: "No. Krets is one of the few apps that doesn't make you hand over a payment method to try the paid tier. We trust you to come back if it's worth it.",
  },
  {
    q: "What's a Founding Keeper?",
    a: "The first 500 hosts get a permanent monthly rate of 39 kr instead of 59 kr. The badge stays with you for life, even if you skip a month.",
  },
  {
    q: "How do I cancel?",
    a: "From inside the app under Settings, or directly through your Apple subscriptions. There's no hoop to jump through.",
  },
  {
    q: "Is Krets on Android?",
    a: "Not yet. Android version coming soon. Today Krets ships on iPhone, with full Universal Links so any invite you send opens cleanly once your friend installs the app.",
  },
  {
    q: "Why this pricing model?",
    a: "Charging the host instead of every member keeps Krets feeling like a place you bring people to, not a service you all subscribe to. It's the same dynamic as hosting a dinner: you cover the table, your guests show up.",
  },
] as const;

export default function PricingPage() {
  return (
    <main>
      <section className="px-6 pt-24 pb-12 text-center md:pt-32">
        <Link href="/" aria-label="Back to home" className="inline-block">
          <KretsMark size={48} className="mb-6" />
        </Link>
        <h1
          className="mx-auto mb-4 max-w-[640px] text-[34px] font-bold leading-tight tracking-tight text-text-primary md:text-[44px]"
          style={{ letterSpacing: "-1.2px" }}
        >
          Free for everyone in your circle
        </h1>
        <p className="mx-auto mb-10 max-w-[520px] text-[17px] leading-relaxed text-text-body">
          Members never pay a thing. Hosts try Krets Keeper free for 60 days, no card needed. After that, 59 kr per month or 499 kr per year.
        </p>

        <div className="flex justify-center">
          <AppStoreButton />
        </div>
        <AndroidComingSoon className="mt-5" />
      </section>

      <section className="light bg-bg px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
          <div className="rounded-[var(--radius-card)] border border-border bg-surface p-7">
            <p className="mb-1 text-[12px] font-semibold uppercase tracking-[1.5px] text-text-muted">
              For members
            </p>
            <h2 className="mb-4 text-[22px] font-bold text-text-primary">Free</h2>
            <div className="mb-1">
              <span className="text-[40px] font-bold text-text-primary">0 kr</span>
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
              Krets Keeper
            </h2>
            <div className="mb-1 flex items-baseline gap-2">
              <span className="text-[40px] font-bold text-text-primary">59 kr</span>
              <span className="text-[14px] text-text-secondary">/ month</span>
            </div>
            <p className="mb-6 text-[13px] text-text-secondary">
              Or 499 kr per year (save about 30%)
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
          Founding Keeper rate: the first 500 hosts pay 39 kr per month for life. The badge stays with you forever.
        </p>
      </section>

      <section
        aria-labelledby="comparison-heading"
        className="bg-deep px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="comparison-heading"
            className="mb-10 text-center text-[22px] font-bold tracking-tight text-text-primary"
          >
            What’s included
          </h2>

          <div className="overflow-hidden rounded-[var(--radius-card)] border border-border">
            <div className="grid grid-cols-[1fr_80px_80px] bg-surface px-5 py-4 text-[12px] font-semibold uppercase tracking-[1.2px] text-text-muted sm:grid-cols-[1fr_120px_120px]">
              <span></span>
              <span className="text-center">Free</span>
              <span className="text-center text-accent">Keeper</span>
            </div>
            {comparison.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_80px_80px] items-center px-5 py-3.5 text-[14px] sm:grid-cols-[1fr_120px_120px] ${
                  idx % 2 === 0 ? "bg-surface" : "bg-deep"
                }`}
              >
                <span className="text-text-body">{row.feature}</span>
                <span className="flex justify-center">
                  {row.free ? (
                    <Check size={18} className="text-accent" aria-label="Yes" />
                  ) : (
                    <X size={18} className="text-text-faint" aria-label="No" />
                  )}
                </span>
                <span className="flex justify-center">
                  {row.keeper ? (
                    <Check size={18} className="text-accent" aria-label="Yes" />
                  ) : (
                    <X size={18} className="text-text-faint" aria-label="No" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="light bg-bg px-6 py-20 md:py-24"
      >
        <div className="mx-auto max-w-2xl">
          <h2
            id="faq-heading"
            className="mb-10 text-center text-[26px] font-bold tracking-tight text-text-primary"
          >
            Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="mb-2 text-[16px] font-semibold text-text-primary">
                  {faq.q}
                </h3>
                <p className="text-[14px] leading-relaxed text-text-body">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep px-6 py-16 text-center md:py-20">
        <h2 className="mb-3 text-[22px] font-bold tracking-tight text-text-primary">
          Ready to start a Krets?
        </h2>
        <p className="mx-auto mb-8 max-w-[420px] text-[15px] leading-relaxed text-text-secondary">
          60 days free. No card. Cancel from your phone in two taps.
        </p>
        <div className="flex justify-center">
          <AppStoreButton />
        </div>
        <AndroidComingSoon className="mt-5" />
      </section>

      <Footer />
    </main>
  );
}
