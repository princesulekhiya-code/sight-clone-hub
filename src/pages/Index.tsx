import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { ScoreSection } from "@/components/ScoreSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <ScoreSection />
      <div className="flow-line-h" />
      <BeforeAfterSection />
      <div className="flow-line-h" />
      <FeaturesSection />
      <div className="flow-line-h" />
      <HowItWorksSection />
      <div className="flow-line-h" />
      <RoadmapSection />
      <div className="flow-line-h" />
      <TestimonialsSection />
      <div className="flow-line-h" />
      <PricingSection />
      <div className="flow-line-h" />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
