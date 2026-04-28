import { KretsMark } from "@/components/KretsMark";
import { AppStoreButton, AndroidComingSoon } from "@/components/AppStoreButton";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="light bg-bg px-6 py-20 text-center md:py-28"
    >
      <div className="mb-5 flex justify-center">
        <KretsMark size={48} />
      </div>
      <h2
        id="cta-heading"
        className="mb-3 text-[26px] font-bold tracking-tight text-text-primary"
      >
        Start a Krets
      </h2>
      <p className="mx-auto mb-8 max-w-[440px] text-[15px] leading-relaxed text-text-secondary">
        Two months free, no card needed. After that, $4.99 / €5.99 / £4.99 / 59 kr per month if you keep going.
      </p>

      <div className="flex justify-center">
        <AppStoreButton />
      </div>

      <AndroidComingSoon className="mt-5" />
    </section>
  );
}
