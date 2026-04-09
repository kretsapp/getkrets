import { KretsMark } from "@/components/KretsMark";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-col items-center px-6 pt-24 pb-20 text-center md:pt-32 md:pb-28"
    >
      <KretsMark size={56} className="mb-5" />

      <h1
        id="hero-heading"
        className="mb-2 text-4xl font-bold tracking-tight text-text-primary"
        style={{ letterSpacing: "-1.5px" }}
      >
        Krets
      </h1>

      <p className="mb-8 text-sm font-medium uppercase tracking-[4px] text-text-secondary">
        Your inner circles
      </p>

      <p className="mx-auto mb-10 max-w-[420px] text-[17px] leading-relaxed text-text-body">
        A private space for your family, your friends, and the people who matter most.
        No ads. No algorithm. Just your people.
      </p>

      <WaitlistForm variant="hero" />

      <p className="mt-4 text-[13px] text-text-muted">
        Be the first to know when Krets launches. No spam, ever.
      </p>
    </section>
  );
}
