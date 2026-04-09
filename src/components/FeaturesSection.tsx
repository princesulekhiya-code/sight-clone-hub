import { Scan, TrendingUp, Briefcase, Target, FileText, BarChart3 } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const features = [
  { icon: Scan, title: "Resume Scan", description: "Upload your resume and our AI will parse through, identifying key qualifications and providing insights.", num: "01", visual: "scan" },
  { icon: TrendingUp, title: "Career Trajectory", description: "Get tailored career suggestions based on current skills and industry trends.", num: "02", visual: "trajectory" },
  { icon: Target, title: "Smart Matching", description: "Understand where your career could lead, get pathways curated from market data.", num: "03", visual: "matching" },
  { icon: Briefcase, title: "Job Compatibility", description: "Match your skills with job listings, see compatibility scores for various roles.", num: "04", visual: "compatibility" },
  { icon: FileText, title: "Resume Builder", description: "Build a compelling resume. Let our AI help you craft impactful professional documents.", num: "05", visual: "builder" },
  { icon: BarChart3, title: "Industry Analytics", description: "Stay informed about industry trends, explore which sectors are hiring and growing.", num: "06", visual: "analytics" },
];

function MiniVisual({ type, isActive }: { type: string; isActive: boolean }) {
  const activeColor = "hsl(var(--primary))";
  const dimColor = "hsl(var(--primary) / 0.2)";
  const midColor = "hsl(var(--primary) / 0.4)";

  if (type === "scan") {
    return (
      <div className="flex items-end gap-1 h-10">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="w-6 h-1 rounded-full transition-all duration-500" style={{ background: isActive ? (i < 3 ? activeColor : midColor) : dimColor, transitionDelay: `${i * 80}ms` }} />
        ))}
      </div>
    );
  }

  if (type === "trajectory") {
    return (
      <div className="flex items-end gap-0.5 h-12">
        {[35, 50, 40, 65, 55, 80, 70, 90].map((h, i) => (
          <div key={i} className="w-2 rounded-t transition-all duration-500" style={{ height: `${isActive ? h : 20}%`, background: isActive ? (i >= 5 ? activeColor : midColor) : dimColor, transitionDelay: `${i * 60}ms` }} />
        ))}
      </div>
    );
  }

  if (type === "matching") {
    return (
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-3 h-3 rounded-full transition-all duration-500" style={{ background: isActive ? activeColor : dimColor, transform: isActive ? "scale(1)" : "scale(0.6)", transitionDelay: `${i * 150}ms` }} />
        ))}
      </div>
    );
  }

  if (type === "compatibility") {
    return (
      <div className="space-y-1.5 w-full">
        {[92, 78, 65].map((score, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[9px] text-muted-foreground w-6">{isActive ? `${score}%` : "—"}</span>
            <div className="flex-1 h-1 rounded-full bg-secondary overflow-hidden">
              <div className="h-full rounded-full transition-all duration-700" style={{ width: isActive ? `${score}%` : "10%", background: score > 80 ? activeColor : midColor, transitionDelay: `${i * 150}ms` }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "builder") {
    return (
      <div className="space-y-1">
        {["Header", "Experience", "Skills"].map((label, i) => (
          <div key={i} className="flex items-center gap-2 text-[9px] text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full transition-all duration-500" style={{ background: isActive ? activeColor : dimColor, transitionDelay: `${i * 100}ms` }} />
            {label}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-end gap-1 h-12">
      {[{ h: 45, label: "Tech" }, { h: 70, label: "Health" }, { h: 55, label: "Finance" }, { h: 85, label: "AI/ML" }, { h: 40, label: "Retail" }].map((bar, i) => (
        <div key={i} className="flex flex-col items-center gap-0.5">
          <div className="w-3 rounded-t transition-all duration-500" style={{ height: `${isActive ? bar.h : 15}%`, background: isActive ? (bar.h > 60 ? activeColor : midColor) : dimColor, transitionDelay: `${i * 80}ms` }} />
          <span className="text-[7px] text-muted-foreground">{bar.label}</span>
        </div>
      ))}
    </div>
  );
}

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">
              ✦ Powerful Tools
            </span>
            <h2 className="section-heading mb-4">
              Everything you need to <span className="purple-text">land your dream job</span>
            </h2>
            <p className="section-subheading mx-auto">
              Six powerful AI tools working together to analyze, optimize, and position your career for success.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const isActive = activeIndex === index;
            const Icon = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 80}>
                <div
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`glow-border-hover glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 ${isActive ? "scale-[1.02]" : ""}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">{feature.num}</span>
                  </div>
                  <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                  {isActive && <MiniVisual type={feature.visual} isActive={isActive} />}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
