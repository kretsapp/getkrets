import { Hero } from "@/components/sections/Hero";
import { PhoneMockup } from "@/components/sections/PhoneMockup";
import { ValueProps } from "@/components/sections/ValueProps";
import { FeatureTour } from "@/components/sections/FeatureTour";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { PrivacyStance } from "@/components/sections/PrivacyStance";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <PhoneMockup />
      <ValueProps />
      <FeatureTour />
      <PricingTeaser />
      <PrivacyStance />
      <FinalCTA />
      <Footer />
    </main>
  );
}
