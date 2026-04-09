import Image from "next/image";
import { KretsMark } from "@/components/KretsMark";

const screens = [
  { src: "/screen-groups.webp", alt: "Groups screen showing Friends and Family circles" },
  { src: "/screen-feed.webp", alt: "Feed screen showing family photos and birthday notification" },
  { src: "/screen-events.webp", alt: "Events screen showing vacation countdown with RSVP" },
] as const;

export function PhoneMockup() {
  return (
    <section
      aria-label="App preview"
      className="relative py-20 md:py-28"
    >
      {/* Soft ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(207,92,54,0.08) 0%, rgba(207,92,54,0.03) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Logo + tagline */}
      <div className="relative mb-12 flex flex-col items-center gap-3 px-6 text-center md:mb-16">
        <KretsMark size={40} />
        <p className="text-sm font-medium uppercase tracking-[4px] text-text-secondary">
          Your inner circles
        </p>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="relative md:hidden">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 scrollbar-none" style={{ WebkitOverflowScrolling: "touch" }}>
          {screens.map((screen) => (
            <div key={screen.src} className="w-[264px] shrink-0 snap-center">
              <Image
                src={screen.src}
                alt={screen.alt}
                width={400}
                height={868}
                className="rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]"
                priority
              />
            </div>
          ))}
          {/* End spacer so last item can snap to center */}
          <div className="w-px shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Desktop: side by side */}
      <div className="relative mx-auto hidden max-w-4xl justify-center gap-6 px-6 md:flex">
        {screens.map((screen) => (
          <div key={screen.src} className="w-[264px] shrink-0">
            <Image
              src={screen.src}
              alt={screen.alt}
              width={400}
              height={868}
              className="rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}
