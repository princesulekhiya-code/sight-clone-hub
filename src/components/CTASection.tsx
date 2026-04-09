import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden cosmic-bg">
      <div className="grid-bg absolute inset-0" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">✦ Start Free Today</span>
          <h2 className="section-heading mb-6">Ready to Engineer Your <span className="warm-text">Next Career Move?</span></h2>
          <p className="section-subheading mx-auto mb-10">Stop guessing and start performing. Upload your resume today and let JOBRA's AI Intelligence handle the rest.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/resume-analysis" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-primary-foreground bg-primary hover:opacity-90 transition-all">
              Analyze My Resume Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-all">View Demo</a>
          </div>

          <div className="flex items-center justify-center gap-8">
            {[{ value: "FORTUNE 500", label: "Companies" }, { value: "TRUSTED", label: "AI Labs" }, { value: "ISO", label: "Certified" }].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-xs font-bold text-foreground">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default CTASection;
