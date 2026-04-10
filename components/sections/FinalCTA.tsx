import { WaitlistForm } from "@/components/WaitlistForm";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="light bg-bg px-6 py-20 text-center md:py-28"
    >
      <h2
        id="cta-heading"
        className="mb-3 text-[23px] font-bold text-text-primary"
      >
        Join the waitlist
      </h2>
      <p className="mb-8 text-[15px] text-text-secondary">
        Be among the first to try Krets when it launches.
      </p>

      <WaitlistForm variant="cta" buttonText="Get early access" />

      <p className="mt-4 text-[13px] text-text-muted">
        No spam, ever.
      </p>
    </section>
  );
}
