import { KretsMark } from "@/components/KretsMark";
import { AppStoreButton, AndroidComingSoon } from "@/components/AppStoreButton";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32 md:pb-20"
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

      <p className="mx-auto mb-10 max-w-[460px] text-[17px] leading-relaxed text-text-body">
        Private spaces for your family, your friends, and the people who matter most.
        No ads. No algorithm. Just your people.
      </p>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
        <AppStoreButton />
        <a
          href="#features"
          className="inline-flex items-center justify-center rounded-[var(--radius-button)] px-6 py-3.5 text-[15px] font-semibold text-text-secondary transition-colors hover:text-text-primary"
        >
          See how it works
        </a>
      </div>

      <AndroidComingSoon className="mt-5" />
    </section>
  );
}
