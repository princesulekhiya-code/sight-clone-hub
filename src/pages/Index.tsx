import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TimingSection from "@/components/TimingSection";
import ClaritySection from "@/components/ClaritySection";
import ListenReadSection from "@/components/ListenReadSection";
import SwitchCallsSection from "@/components/SwitchCallsSection";
import BeFirstSection from "@/components/BeFirstSection";
import ComparisonSection from "@/components/ComparisonSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="divider-gradient" />
      <TimingSection />
      <div className="divider-gradient" />
      <ClaritySection />
      <div className="divider-gradient" />
      <ListenReadSection />
      <div className="divider-gradient" />
      <SwitchCallsSection />
      <div className="divider-gradient" />
      <BeFirstSection />
      <div className="divider-gradient" />
      <ComparisonSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
