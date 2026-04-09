import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PhoneMockup } from "@/components/sections/PhoneMockup";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <ProblemSection />
      <HowItWorks />
      <PhoneMockup />
      <FinalCTA />
      <Footer />
    </main>
  );
}
