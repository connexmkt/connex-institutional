import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/sections/services";
import { MethodologySection } from "@/components/sections/methodology";
import { TimelineSection } from "@/components/sections/timeline";
import { ResultsSection } from "@/components/sections/results";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <MethodologySection />
        <TimelineSection />
        <ResultsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
