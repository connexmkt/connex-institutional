import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/sections/services";
import { StorySection } from "@/components/sections/story";
import { MethodologySection } from "@/components/sections/methodology";
import { CasesTeaserSection } from "@/components/sections/cases-teaser";
import { ProofSection } from "@/components/sections/proof";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <StorySection />
        <MethodologySection />
        <CasesTeaserSection />
        <ProofSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
